<script>
  import { onMount } from 'svelte';
  import { Note } from 'tonal';
  let audioCtx = null;
  let analyserNode = null;
  let microphoneStream = null;
  let audioData = null;
  let corrolatedSignal = null;
  let localMaxima = new Array(10);
  let error = '';
  let pitch = 0;
  function getAutocorrolatedPitch() {
    // First: autocorrolate the signal

    let maximaCount = 0;

    for (let l = 0; l < analyserNode.fftSize; l++) {
      corrolatedSignal[l] = 0;
      for (let i = 0; i < analyserNode.fftSize - l; i++) {
        corrolatedSignal[l] += audioData[i] * audioData[i + l];
      }
      if (l > 1) {
        if (
          corrolatedSignal[l - 2] - corrolatedSignal[l - 1] < 0 &&
          corrolatedSignal[l - 1] - corrolatedSignal[l] > 0
        ) {
          localMaxima[maximaCount] = l - 1;
          maximaCount++;
          if (maximaCount >= localMaxima.length) break;
        }
      }
    }

    // Second: find the average distance in samples between maxima

    let maximaMean = localMaxima[0];

    for (let i = 1; i < maximaCount; i++) maximaMean += localMaxima[i] - localMaxima[i - 1];

    maximaMean /= maximaCount;

    return audioCtx.sampleRate / maximaMean;
  }
  const startDetection = () => {
    console.log('started');
    audioCtx = new window.AudioContext();
    analyserNode = audioCtx.createAnalyser();
    audioData = new Float32Array(analyserNode.fftSize);
    corrolatedSignal = new Float32Array(analyserNode.fftSize);
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        microphoneStream = audioCtx.createMediaStreamSource(stream);
        microphoneStream.connect(analyserNode);

        audioData = new Float32Array(analyserNode.fftSize);
        corrolatedSignal = new Float32Array(analyserNode.fftSize);

        setInterval(() => {
          analyserNode.getFloatTimeDomainData(audioData);

          pitch = getAutocorrolatedPitch();
        }, 300);
      })
      .catch((err) => {
        error = err.toString();
      });
  };
  $: notation = Note.fromFreq(pitch);
</script>

<h1 class="text-3xl font-bold underline bg-sky-500">Frequency (Hz)</h1>
<h2 class="text-3xl font-bold underline" id="frequency">{pitch}</h2>
<h2 class="text-3xl font-bold underline" id="notatiom">{notation}</h2>
{#if error}
  <h3>Error: {error}</h3>
{/if}
<button class="dark:md:hover:bg-fuchsia-600" on:click={startDetection}>
  Start Pitch Detection
</button>
