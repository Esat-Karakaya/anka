// ALL INPUT CHARS SHOULD BE LOWERCASE
import { nextVowel, hardeners, softener, getLastVowel, tekHece } from "../utilities.js";

export function olumsuzluk(word) {
  return word + "m" + nextVowel[getLastVowel(word)][0];
}

export const haberKipi = {
  geniş(word, moreInfo) {
    let newWord = word;

    if (moreInfo?.yumuşama)
      newWord = softener(word, true);

    if (!nextVowel[word.at(-1)] && tekHece(word)) {
      newWord += nextVowel[getLastVowel(word)][0];
    }
    else if (!nextVowel[word.at(-1)]){
      newWord += nextVowel[getLastVowel(word)][1];
    }

    return newWord + "r";
  }
}