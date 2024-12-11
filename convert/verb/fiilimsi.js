// ALL FUNTIONS HERE CAUSE MUTATION

import { olumsuzluk, haberKipi } from "./çekim.js";
import { sesliEkle, nextVowel, getLastVowel} from "../utilities.js";
import { halEki, eşitlikEki } from "../noun/suffix-adders.js";

export const isimFiil = {
	ma:olumsuzluk,
	ış(word, flags) {
		word = sesliEkle(word, flags, 1);
		return word+"ş";
	},
	mak(word) { return olumsuzluk(word)+"k"; },
}

export const sıfatFiil = {
	an(word, flags) {
		word = sesliEkle(word, flags, 0);
		return word+"n";
	},
	ası(word, flags) {
		word = sesliEkle(word, flags, 0);
		const vwl = nextVowel[word.at(-1)][1];
		return word+"s"+vwl;
	},
	mez(word) { return olumsuzluk(word)+"z"; },
	ar:haberKipi.geniş,
	dik:haberKipi.görülenP1, // dığında -> fiil + dIk + iyelik + hal eki
	ecek:haberKipi.gelecek,
	miş:haberKipi.duyulan,
}


// EKLENTİDE ZARF FİİL AA DESTEĞİ YOK EKLENTİ EN FAZLA İKİ KELİME ALIR
export const zarfFiil = {
	// aa(word, flags) {
	// 	word = sesliEkle(word, flags, 0);

	// 	let start = word.length-1
	// 	for (; start>=0 && word[start]!==" "; --start);
	// 	const second = word.slice(start+1);

	// 	return word + " " + second;
	// },
	arak(word, flags) {
		word = sesliEkle(word, flags, 0);
		return word + "r" + word.at(-1) + "k";
	},
	alı(word, flags) {
		word = sesliEkle(word, flags, 0);
		return word + "l" + nextVowel[word.at(-1)][1];
	},
	ip(word, flags){ return sesliEkle(word, flags, 1) + "p"; },
	ince(word, flags){
		word = sesliEkle(word, flags, 1) + "nc";
		word += nextVowel[word.at(-3)][0];

		return word;
	},
	madan(word) {
		return halEki.ayrılma(olumsuzluk(word), {});
	},
	maksızın(word) {
		const vwl = getLastVowel(word);
		if (nextVowel[vwl][0]==="a")
			return word+"maksızın";
		return word+"meksizin";
	},
	ken(word){ return word + "ken"},
	dikçe(word) {return eşitlikEki(haberKipi.görülenP1(word), {})},
	casına(word) {
		word+="c";
		word = sesliEkle(word, 0, 0) +"s";
		word = sesliEkle(word, 0, 1) +"n";
		word += nextVowel[word.at(-2)][0];
		return word;
	}
}