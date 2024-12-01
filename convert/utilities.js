export const hardeners = new Set([
  "f", "s", "t", "k",
  "ç", "ş", "h", "p",
]);

export const nextVowel = {
  a: ["a", "ı"],
  e: ["e", "i"],
  ı: ["a", "ı"],
  i: ["e", "i"],
  o: ["a", "u"],
  ö: ["e", "ü"],
  u: ["a", "u"],
  ü: ["e", "ü"],
};

export function softener(word, isVerb) {
  if (!isVerb && tekHece(word)) return word;

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
      return word;
  }

  return word.slice(0, -1) + softenWith;
}

export function tekHece(word) {
  let count = 0;

  for (let i = word.length - 1; i >= 0 && word[i]!==" "; i--) {
    if (nextVowel.hasOwnProperty(word[i]))
      count++;
    if (count > 1){
      return false;
    }
  }

  return true;
}

export function getLastVowel(word) {
	let i;
	for (
		i = word.length - 1;
		i > 0 && !nextVowel.hasOwnProperty(word[i]);
		i--
	);
	return word[i];
}