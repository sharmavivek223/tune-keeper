<script lang="ts">
  import { onMount } from 'svelte';
  import { Note } from 'tonal';
  let audioCtx: AudioContext;
  let analyserNode: AnalyserNode;
  let microphoneStream: MediaStreamAudioSourceNode;
  let audioData: Float32Array;
  let corrolatedSignal: Float32Array;
  let localMaxima: number[] = new Array(10);
  let error: string;
  let pitch = 0;
  let fileData: any;
  const getAutoCorrolatedPitch = (): number => {
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
  };
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

          pitch = getAutoCorrolatedPitch();
        }, 300);
      })
      .catch((err) => {
        error = err.toString();
      });
  };
  $: notation = Note.fromFreq(pitch);
  let audioFile: any;

  const handleChange = async (event: any) => {
    audioFile = event.target.files[0];
    audioFile = await audioFile.arrayBuffer();
    const audioContext = new AudioContext();

    // Load the audio file into the audio context
    const audioBuffer = await audioContext.decodeAudioData(audioFile);

    // Create an analyser node
    const analyser = audioContext.createAnalyser();

    // Connect the audio buffer to the analyser node
    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(analyser);

    // Start the audio
    source.start();

    // Extract the pitch data from the audio
    fileData = new Uint8Array(analyser.frequencyBinCount);
    console.log(analyser.getByteFrequencyData(fileData));
    // You can now use the `audioFile` variable to do something with the uploaded audio file,
    // such as sending it to a server for storage or playback.
  };
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
<input type="file" accept="audio/*" bind:value={audioFile} on:change={handleChange} />
<pre>{JSON.stringify(fileData,null,4)}</pre>
