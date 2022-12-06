import { c as create_ssr_component, e as escape } from "../../chunks/index.js";
import { Note } from "tonal";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let notation;
  new Array(10);
  let pitch = 0;
  notation = Note.fromFreq(pitch);
  return `<h1 class="${"text-3xl font-bold underline bg-sky-500"}">Frequency (Hz)</h1>
<h2 class="${"text-3xl font-bold underline"}" id="${"frequency"}">${escape(pitch)}</h2>
<h2 class="${"text-3xl font-bold underline"}" id="${"notatiom"}">${escape(notation)}</h2>
${``}
<button class="${"dark:md:hover:bg-fuchsia-600"}">Start Pitch Detection
</button>`;
});
export {
  Page as default
};
