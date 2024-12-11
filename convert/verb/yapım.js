// ALL FUNTIONS HERE CAUSE MUTATION

import { sesliEkle, nextVowel, getLastVowel, softener} from "../utilities.js";

export function ıcı(word, flags) { // isim yapar
	word = sesliEkle(word, flags, 1);
	word += "c" + word.at(-1);

	return word;
}

export function edilgen(word, flags) { // fiil
	const vwl = getLastVowel(word);
	if (flags & 1)
		word = softener(word, true);
	if (word.at(-1) !== vwl)
		word+=nextVowel[vwl][1];

	if (lastConsonant(word) === "l")
		word+="n";
	else
		word+="l";

	return word;
}

function lastConsonant(word) {
	let i;
	for (
		i = word.length - 1;
		i > 0 && nextVowel.hasOwnProperty(word[i]);
		i--
	);
	return word[i];
}