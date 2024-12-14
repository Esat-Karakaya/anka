import { arrayifyText } from "./arrayify.js";
import { isForeign, replaceForeign } from "./dilbilgisi.js";

// returns alternatives for used forign word roots
// and original form of the foreign roots
export function textForeignInfo(text, getMulti) {
	const words = arrayifyText(text);
	const replacements = {} // {dizaynın: ["tasarımın"], perspektifini: ["bakış açını", "bakış açısını"]}

	// Iterate over words
	for (let i = 0; i < words.length; i++) {

		const merged = words[i] + " " + words[1+i];

		const info = isForeign(merged);

		if (!info.foreign) continue; // word not foreign

		let foreign;
		if (info.twoWord) {
			foreign = merged;
			i++; // skip second word
		}
		else foreign = words[i];

		const possibleLocals = replaceForeign(foreign);
		if (!possibleLocals.size) 
			continue;

		replacements[foreign] = [...possibleLocals];

		if (!getMulti){
			// a single word is needed
			replacements[foreign] =
			replacements[foreign][0]
		}
	}

	return replacements;
}