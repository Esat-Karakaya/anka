import { foreignNounConvert } from "../convert/noun/noun-handler.js";
import {words, twoWords} from "./dict.js"

export function isForeign(word) {

	word=word.toLocaleLowerCase("tr");
	
	if (word.includes(" ")) { // word is made up of two words
		const result = isTwoWordForeign(word);

		if (result.twoWord) return result;
	}

	for (let i = word.length; i > 1; i--) {
		const sliced = word.slice(0, i);
		const replaceInfo = words[sliced];
		
		if (replaceInfo) {
			return {
				foreign: true,
				rootForeign: sliced,
				...replaceInfo
			};
		}
	}
	return {};
}

function isTwoWordForeign(word) {
	const splitted = word.split(" ");
	
	if (!twoWords[splitted[0]]) return {};

	for (const secondBase of twoWords[splitted[0]]) { // iterate second words from dictionary

		const rootForeign = splitted[0] + " " + secondBase; // the word in dictionary

		const secondSlice = splitted[1].slice(0, secondBase.length); // the second input word base (maybe)

		if (
			secondBase === secondSlice ||
			(secondBase ==="et" && "ed" === secondSlice)
		) {
			return {
				twoWord: true,
				foreign: true,
				rootForeign,
				...words[rootForeign],
			}
		}
	}

	return {};
}

export function replaceForeign(word) { // NEEDS IMPROVEMENT
	const replaceInfo = isForeign(word);
	
	const capital = word[0] === word[0].toLocaleUpperCase("tr");
	let replacements;

	if (!(replaceInfo.flags & 1)) {
		// noun
		replacements = foreignNounConvert(word.toLocaleLowerCase("tr"), replaceInfo);
				
	}else {
		// verb
		replacements = new Set([replaceInfo.local]);
	}

	if (capital) {
		// tarasım -> Tarasım

		const capitals = new Set();
		for (const local of replacements) {
			capitals.add(local[0].toLocaleUpperCase("tr") + local.slice(1));
		}

		replacements = capitals;
	}
	return replacements;
}