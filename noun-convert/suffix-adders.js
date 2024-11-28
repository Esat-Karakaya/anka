// ALL INPUT CHARS SHOULD BE LOWERCASE

const hardeners = new Set([
  "f", "s", "t", "k",
  "ç", "ş", "h", "p",
]);

const nextVowel = {
  a: ["a", "ı"],
  e: ["e", "i"],
  ı: ["a", "ı"],
  i: ["e", "i"],
  o: ["a", "u"],
  ö: ["e", "ü"],
  u: ["a", "u"],
  ü: ["e", "ü"],
  "'": ["e", "i"],
};

export function çoğulEki(word) {
  const lastvowel = getLastVowel(word);
  if (nextVowel[lastvowel][0] === "a") {
	return word + "lar";
  }
  return word + "ler";
}
export const iyelikEki = {
  s1(word, moreInfo) {
	if (nextVowel.hasOwnProperty(word.at(-1))) return word + "m";

	let softened = ( moreInfo.yumuşamama ? word : softener(word) );
	let lastvowel = getLastVowel(softened);

	return word + nextVowel[lastvowel][1] + "m";
  },
  s2(word, moreInfo) {
	if (nextVowel.hasOwnProperty(word.at(-1))) return word + "n";

	let softened = ( moreInfo.yumuşamama ? word : softener(word) );
	let lastvowel = getLastVowel(softened);

	return word + nextVowel[lastvowel][1] + "n";
  },
  s3(word, moreInfo) {
	let lastvowel = getLastVowel(word);
	let vowelToAdd = nextVowel[lastvowel][1];

	if (word.at(-1) === lastvowel) return word + "s" + vowelToAdd;

	let softened = ( moreInfo.yumuşamama ? word : softener(word) );
	return softened + vowelToAdd;
  },
  p1(word, moreInfo) {
	let lastvowel = getLastVowel(word);
	let vowelToAdd = nextVowel[lastvowel][1];

	if (word.at(-1) === lastvowel) return word + "m" + vowelToAdd + "z";

	let softened = ( moreInfo.yumuşamama ? word : softener(word) );
	return softened + vowelToAdd + "m" + vowelToAdd + "z";
  },
  p2(word, moreInfo) {
	let lastvowel = getLastVowel(word);
	let vowelToAdd = nextVowel[lastvowel][1];

	if (word.at(-1) === lastvowel) return word + "n" + vowelToAdd + "z";

	let softened = ( moreInfo.yumuşamama ? word : softener(word) );
	return softened + vowelToAdd + "n" + vowelToAdd + "z";
  },
  p3(word, moreInfo) {
	return this.s3(çoğulEki(word), moreInfo);
  },
};

export const halEki = { // ki zamiri ve iyelik ekinden sonra n kaynaştırma daha sonra hal eki
  belirtme(word, moreInfo) {
	let newWord = ( moreInfo.yumuşamama ? word : softener(word) );
	if (moreInfo.kaynaşım && nextVowel.hasOwnProperty(word.at(-1))) newWord += "n";
	else if (nextVowel.hasOwnProperty(word.at(-1))) newWord += "y";

	return newWord + nextVowel[getLastVowel(word)][1];
  },
  yaklaşma(word, moreInfo) {
	let newWord = ( moreInfo.yumuşamama ? word : softener(word) );
	if (moreInfo.kaynaşım && nextVowel.hasOwnProperty(word.at(-1))) newWord += "n";
	else if (nextVowel.hasOwnProperty(word.at(-1))) newWord += "y";

	return newWord + nextVowel[getLastVowel(word)][0];
  },
  bulunma(word, moreInfo) {
	let newWord = word;
	if (moreInfo.kaynaşım && nextVowel.hasOwnProperty(word.at(-1))) newWord += "n";
	newWord += hardeners.has(newWord.at(-1)) ? "t" : "d";

	return newWord + nextVowel[getLastVowel(word)][0];
  },
  ayrılma(word, moreInfo) {
	let newWord = word;
	if (moreInfo.kaynaşım && nextVowel.hasOwnProperty(word.at(-1))) newWord += "n";
	newWord += hardeners.has(newWord.at(-1)) ? "t" : "d";

	return newWord + nextVowel[getLastVowel(word)][0] + "n";
  },
};

export function tamlayanEki(word, moreInfo) {
	let newWord = word;
  if (nextVowel.hasOwnProperty(word.at(-1)))
  	newWord += "n";
  return iyelikEki.s2(newWord, moreInfo);
}

export function eşitlikEki(word, moreInfo) {
	const lastvowel = getLastVowel(word);

	let toAdd="";
  if (moreInfo.kaynaşım && lastvowel === word.at(-1)) toAdd+="n";
	if (hardeners.has(word.at(-1))) toAdd+="ç";
	else toAdd+="c";
	toAdd += nextVowel[lastvowel][0];

	return word + toAdd;
}

export function birliktelikEki(word) {
  const lastvowel = getLastVowel(word);
  let suffix = "";
  if (lastvowel===word.at(-1)) suffix+="y";
  suffix+="l" + nextVowel[lastvowel][0];

  return word+suffix;
}

export function ilgiZamiriEki(word) {
	return word + "ki";
}

export function nePekiştirmesi(word) { // casına ekinin son hecesi
  if (!nextVowel[word.at(-1)]) return word+"nn";
	return word + "n" + nextVowel[word.at(-1)][0];
}

//---------------------
//  isim eylem ekleri
//---------------------
export const genişZamanEki = {
  s1(word, moreInfo) {
	let lastvowel = getLastVowel(word);

	let suffix = "";
	if (word.at(-1)===lastvowel) suffix += "y";

	suffix += nextVowel[lastvowel][1] + "m";

	return ( moreInfo.yumuşamama ? word : softener(word) ) + suffix;
  },
  s2(word) {
	let lastvowel = getLastVowel(word);

	return word + "s" + nextVowel[lastvowel][1] + "n";
  },
  s3(word) { // her zaman dİr eki ekler
	let suffix = "";
	suffix += hardeners.has(word.at(-1)) ? "t" : "d";
	suffix += nextVowel[getLastVowel(word)][1] + "r";

	return word + suffix;
  },
  p1(word, moreInfo) {
	let newWord = this.s1(word, moreInfo);
	return newWord.slice(0, newWord.length-1) + "z";
  },
  p2(word) {
	let vowel = nextVowel[ getLastVowel(word) ][1];

	return word + "s" + vowel + "n" + vowel + "z";
  },
  p3_1:çoğulEki,
  p3_2(word) {
	return çoğulEki(this.s3(word));
  },
};

export const görülenZamanEki = {
  s1(word) {
	return this.s3(word) + "m";
  },
  s2(word) {
	return this.s3(word) + "n";
  },
  s3(word) {
	let lastvowel = getLastVowel(word);

	let suffix = "";
	if (word.at(-1)===lastvowel) suffix += "yd";
	else if (hardeners.has(word.at(-1))) suffix += "t";
	else suffix += "d";

	return word + suffix + nextVowel[lastvowel][1];
  },
  p1(word) {
	return this.s3(word) + "k";
  },
  p2(word) {
	let out = this.s3(word);
	return out + "n" + out.at(-1) + "z";
  },
  p3(word) {
	return çoğulEki(this.s3(word));
  },
};

export const duyulanZamanEki = {
  s1(word) {
	let out = this.s3(word);
	return out + out.at(-2) + "m";
  },
  s2(word) {
	let out = this.s3(word);
	return out + "s" + out.at(-2) + "n";
  },
  s3(word) {
	let lastvowel = getLastVowel(word);

	let suffix = "";
	if (word.at(-1)===lastvowel) suffix += "y";
	suffix += "m" + nextVowel[lastvowel][1] + "ş";

	return word + suffix;
  },
  p1(word) {
	let out = this.s3(word);
	return out + out.at(-2) + "z";
  },
  p2(word) {
	let out = this.s2(word);
	return out + out.at(-2) + "z";
  },
  p3(word) {
	return çoğulEki(this.s3(word));
  },
};

export const şartZamanEki = {
  s1(word) {
	return this.s3(word) + "m";
  },
  s2(word) {
	return this.s3(word) + "n";
  },
  s3(word) {
  	let lastvowel = getLastVowel(word);
	let vowelToAdd = nextVowel[ lastvowel ][0];
	if (lastvowel === word.at(-1)) return word + "ys" + vowelToAdd;
	return word + "s" + vowelToAdd;
  },
  p1(word) {
	return this.s3(word) + "k";
  },
  p2(word) {
	let out = this.s2(word);
	return out + nextVowel[out.at(-2)][1] + "z";
  },
  p3(word) {
	return çoğulEki(this.s3(word));
  },
};

//---------------------
//	   HELPERS
//---------------------
function softener(word) {
  if (!doesSoften(word)) return word;

  let softenWith = "";
  switch (word.at(-1)) {
	case "t":
	  softenWith = "d";
	  break;

	case "ç":
	  softenWith = "c";
	  break;

	case "p":
	  softenWith = "b";
	  break;

	case "k":
	  if (nextVowel.hasOwnProperty(word.at(-2))) softenWith = "ğ";
	  else softenWith = "g";
	  break;

	default:
	  softenWith = word.at(-1);
  }

  return word.slice(0, -1) + softenWith;
}

function doesSoften(word) {
  let count = 0;

  for (let i = word.length - 1; i >= 0 || word[i]===" "; i--) {
	if (nextVowel.hasOwnProperty(word[i]))
	  count++;
	if (count > 1)
	  return false;
  }
  return true;
}

function getLastVowel(word) {
  for (
	var i = word.length - 1;
	!nextVowel.hasOwnProperty(word[i]) && i >= 0;
	i--
  );
  return word[i];
}
