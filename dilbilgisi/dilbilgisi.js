import { foreignNounConvert } from "../noun-convert/noun-handler.js";
import {words, twoWords} from "./dict.js"

export function isForeign(word) {

    word=word.toLowerCase();
    
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
    return {foreign: false};
}

function isTwoWordForeign(word) {
    const splitted = word.split(" ");
    
    if (!twoWords[splitted[0]]) return { twoWord: false };

    const secondBase = twoWords[splitted[0]]; // second word from dictionary
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

    return {twoWord: false};
}

export function replaceForeign(word) { // NEEDS IMPROVEMENT
    const replaceInfo = isForeign(word);
    
    const capital = word[0] === word[0].toLocaleUpperCase("tr");

    if (!(replaceInfo.flags & 1)) {
        let value = [...foreignNounConvert(word.toLocaleLowerCase("tr"), replaceInfo)][0];
        
        if (capital) // tarasım -> Tarasım
            value = value[0].toLocaleUpperCase("tr") + value.slice(1);
        return value;
    }

    return replaceInfo.local;
}