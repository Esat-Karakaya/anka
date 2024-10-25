import { ALPHABET } from "../utils/arrayify";
import { isForeign } from "../utils/dilbilgisi";
import { fixTxt, getAlternatives, getLastGroupStart, PUNCTUATIONS, sortedLoopable } from "./shared";

export function handleTextarea(textarea) {
    const alternatives = getAlternatives(textarea.value);
    console.log(alternatives);

    const sorted = sortedLoopable(alternatives);

    let { length } = textarea.value;

    //count from end
    const caretPos = length - textarea.selectionStart;

    replacer(textarea, sorted);

    length = textarea.value.length;
    // set from end
    textarea.selectionStart = length - caretPos;
    textarea.selectionEnd = length - caretPos;
}

function replacer(textarea, sorted) { // mutation
    const { value } = textarea;
    textarea.value=fixTxt(value, sorted);
    if (PUNCTUATIONS.has(value.at(-1))) {
        textarea.value=fixTxt(value, sorted);
        return;
    }
    const lastGroupStart = getLastGroupStart(value);
    
    if (
        !ALPHABET.has(value.at(-1)) && 
        !isForeign(value.slice(lastGroupStart)).foreign
    ) {
        textarea.value=fixTxt(value, sorted);
    }
    else {
        textarea.value=
            fixTxt(value.slice(0, lastGroupStart), sorted)+ 
            value.slice(lastGroupStart);
    }
}