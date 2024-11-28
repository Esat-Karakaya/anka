//Includes ' to avoid word break
const ALPHABET = new Set([
	"A", "a", "B", "b", "C", "c", "Ç", "ç", "D", "d", "E", "e", "F", "f", "G", "g", "Ğ", "ğ",
	"H", "h", "I", "ı", "İ", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "Ö", "ö",
	"P", "p", "R", "r", "S", "s", "Ş", "ş", "T", "t", "U", "u", "Ü", "ü", "V", "v", "Y", "y", "Z", "z",
	"'", "w", "W", "q", "Q", "x", "X"
]);

// Assumes there is no space before and after '
// returns an array of words
export function arrayifyText(text) {

	let wordStart = 0;
	let wordEnd = 0;

	const words = [];

	for (let i=0; i <= text.length; i++) {


		// word has ended
		if (!ALPHABET.has(text[i]) || (i === text.length && ALPHABET.has(text[i-1]))) {
			wordEnd=i;

			const word = text.slice(wordStart, wordEnd);

			words.push(word);

			// find next word start
			for (; i < text.length && !ALPHABET.has(text[i]); i++);
			wordStart=i;
		}
	}

	return words;
}
