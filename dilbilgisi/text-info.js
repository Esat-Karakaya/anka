import { arrayifyText } from "./arrayify.js";
import { isForeign, replaceForeign } from "./dilbilgisi.js";

// returns alternatives for used forign word roots
// and original form of the foreign roots
export function textForeignInfo(text) {
    const words = arrayifyText(text);
    const replacements = {} // {dizaynın: ["tasarımın"], perspektifin: ["bakış açın", "bakış açısı"]}

    // Iterate over words
    for (let i = 0; i < words.length; i++) {

        const merged = words[i] + " " + words[1+i];

        const info = isForeign(merged);

        if (!info.foreign) continue; // word not foreign

        if (info.twoWord) {
            replacements[merged] = replaceForeign(merged).values().next().value;
            i++; // skip second word
            continue;
        }
        replacements[words[i]] = replaceForeign(words[i]).values().next().value;
    }

    return replacements;
}