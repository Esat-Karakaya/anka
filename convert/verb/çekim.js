// ALL INPUT CHARS SHOULD BE LOWERCASE

import { nextVowel, hardeners, softener as crudeSoftener, getLastVowel, tekHece, sesliEkle } from "../utilities.js";
import { çoğulEki } from "../noun/suffix-adders.js";

export function olumsuzluk(word) {
	return word + "m" + nextVowel[getLastVowel(word)][0];
}

export const haberKipi = {
	geniş(word, flags) {

		if (flags & 1)
			word = softener(word);

		const tekMi = tekHece(word);
		const isEdge = Boolean(flags & (2**2));

		if (!nextVowel[word.at(-1)] && tekMi!=isEdge) {
			word += nextVowel[getLastVowel(word)][0];
		}
		else if (!nextVowel[word.at(-1)]){
			word += nextVowel[getLastVowel(word)][1];
		}

		return word + "r";
	},
	genişOlumsuz(word) { return olumsuzluk(word) + "z"; },
	genişOlumsuzS1(word) { return olumsuzluk(word) + "m"; },
	genişOlumsuzP1(word) {
		word = olumsuzluk(word) + "y";

		word += nextVowel[word.at(-2)][1];
		return word + "z";
	},

	şimdiki(word, flags) {

		if (nextVowel[word.at(-1)])
			word = word.slice(0, word.length -1);
		else if (flags & 1)
			word = softener(word);

		word += nextVowel[getLastVowel(word)][1];

		return word + "yor";
	},

	görülen(word) {
		let suf =
		hardeners.has(word.at(-1)) ?
			't' : 'd';

		suf += nextVowel[getLastVowel(word)][1];

		return word + suf;
	},
	görülenS2(word) { return haberKipi.görülen(word) + "n"; },
	görülenP1(word) { return haberKipi.görülen(word) + "k"; },
	görülenP2(word) {
		word = haberKipi.görülenS2(word)
		return word + word.at(-2) + "z";
	},

	duyulan(word) {
		const vowel = nextVowel[getLastVowel(word)][1];

		return word + "m" + vowel + "ş";
	},

	gelecek(word, flags) {
		const lastVwl = getLastVowel(word);

		if (flags & 1)
			word = softener(word);
		if (lastVwl === word.at(-1))
			word+="y";

		const vowel = nextVowel[lastVwl][0];

		return word + vowel + "c" + vowel + "k";
	}
}

export const dilekKipi = {
	istek(word, flags) {
		let suff = "";
		const lastVwl = getLastVowel(word);

		if (lastVwl === word.at(-1))
			suff+="y";

		suff+=nextVowel[lastVwl][0];

		if (flags & 1)
			word = softener(word);

		return word + suff;
	},
	istekS1(word, flags) {
		return şahıs.s1(dilekKipi.istek(word, flags) + "y");
	},
	istekP1(word, flags) {
		word = dilekKipi.istek(word, flags) + "l";
		word += nextVowel[getLastVowel(word)][1];

		return word + "m";
	},

	şart(word) {
		const vowel = nextVowel[getLastVowel(word)][0];

		return word + "s" + vowel;
	},
	şartP1(word) { return dilekKipi.şart(word) + "k"; },
	şartS2(word) { return dilekKipi.şart(word) + "n"; },
	şartP2(word) {
		word = dilekKipi.şartS2(word);
		word += nextVowel[word.at(-2)][1] + "z";
		return word;
	},

	emirS3 (word) {
		return (
			word + "s" +
			nextVowel[getLastVowel(word)][1] + "n"
		)
	},
	emirP3 (word) {
		return çoğulEki(dilekKipi.emirS3(word));
	},
	emirP2_1 (word, flags) {
		if (flags & 1)
			word = softener(word);

		if (nextVowel[word.at(-1)])
			word += "y";

		return (
			word +
			nextVowel[getLastVowel(word)][1] + "n"
		)
	},
	emirP2_2 (word, flags) {
		word = dilekKipi.emirP2_1(word, flags);
		word+=word.at(-2) + "z";
		return word;
	},

	gereklilik(word) {
		word = olumsuzluk(word);
		word += "l" + nextVowel[word.at(-1)][1];

		return word;
	},
	gereklilikS1(word) {
		return şahıs.s1(dilekKipi.gereklilik(word) + "y");
	}
}

export const şahıs = {
	s1(word) {
		word = softener(word);
		const lastVwl = getLastVowel(word);

		if (word.at(-1) !== lastVwl)
			word+=nextVowel[lastVwl][1];

		return word + "m";
	},
	s2(word) {
		const lastVwl = getLastVowel(word);

		return word + "s" + nextVowel[lastVwl][1] + "n";
	},
	p1(word) {
		word = softener(word);
		const lastVwl = getLastVowel(word);
		if (lastVwl === word.at(-1))
			word+="y";

		return word + nextVowel[lastVwl][1] + "z";
	},
	p2(word) {
		return şahıs.p1(şahıs.s2(word));
	},
	p3:çoğulEki,
}

export const birleşikZaman = {
	görülen(word) { return haberKipi.görülen(yKaynaştırma(word)) },
	görülenS2(word) { return haberKipi.görülenS2(yKaynaştırma(word)) },
	görülenP1(word) { return haberKipi.görülenP1(yKaynaştırma(word)) },
	görülenP2(word) { return haberKipi.görülenP2(yKaynaştırma(word)) },

	duyulan(word) { return haberKipi.duyulan(yKaynaştırma(word)) },

	şart(word) { return dilekKipi.şart(yKaynaştırma(word)) },
	şartP1(word) { return dilekKipi.şartP1(yKaynaştırma(word)) },
	şartP2(word) { return dilekKipi.şartP2(yKaynaştırma(word)) },
	şartS2(word) { return dilekKipi.şartS2(yKaynaştırma(word)) },
}

export function dir(word) {
	return haberKipi.görülen(word) + "r";
}

export const kurallıBir = {
	yeterlilik(word, flags) { return sesliEkle(word, flags, 0) + "bil" },
	yeterlilikOlumsuz(word, flags) { return olumsuzluk(sesliEkle(word, flags, 0)) },
	yeterlilikGenişOlumsuz(word, flags) { return haberKipi.genişOlumsuz(sesliEkle(word, flags, 0)) },
	yeterlilikGenişOlumsuzS1(word, flags) { return haberKipi.genişOlumsuzS1(sesliEkle(word, flags, 0)) },
	yeterlilikGenişOlumsuzP1(word, flags) { return haberKipi.genişOlumsuzP1(sesliEkle(word, flags, 0)) },
	tezlik(word, flags) { return sesliEkle(word, flags, 1) + "ver" },
	yaklaşma(word, flags) { return sesliEkle(word, flags, 0) + "yaz" },
	edur(word, flags) { return sesliEkle(word, flags, 0) + "dur" },
}

// helper

function yKaynaştırma(word) {
	if (nextVowel.hasOwnProperty(word.at(-1)))
		return word + "y";
	return word;
}

function softener(word) {
	return crudeSoftener(word, true);
}