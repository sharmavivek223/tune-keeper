import { c as create_ssr_component, e as escape } from "../../chunks/index.js";
import { Note } from "tonal";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let notation;
  globalThis && globalThis.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  new Array(10);
  let pitch = 0;
  let fileData;
  notation = Note.fromFreq(pitch);
  return `<h1 class="${"text-3xl font-bold underline bg-sky-500"}">Frequency (Hz)</h1>
<h2 class="${"text-3xl font-bold underline"}" id="${"frequency"}">${escape(pitch)}</h2>
<h2 class="${"text-3xl font-bold underline"}" id="${"notatiom"}">${escape(notation)}</h2>
${``}
<button class="${"dark:md:hover:bg-fuchsia-600"}">Start Pitch Detection
</button>
<input type="${"file"}" accept="${"audio/*"}">
<pre>${escape(JSON.stringify(fileData, null, 4))}</pre>`;
});
export {
  Page as default
};
