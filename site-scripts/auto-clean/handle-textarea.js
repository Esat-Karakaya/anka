async function handleTextarea(textarea) {
    const { rootOriginals } = await textForeignInfo(textarea.value);
    const alternatives = await getAlternatives(rootOriginals);

    const sorted = sortedLoopable(alternatives);

    let { length } = textarea.value;

    //count from end
    const caretPos = length - textarea.selectionStart;

    replacer(textarea, sorted, alternatives);

    length = textarea.value.length;
    // set from end
    textarea.selectionStart = length - caretPos;
    textarea.selectionEnd = length - caretPos;
}

function replacer(textarea, sorted, alternatives) { // mutation
    const { value } = textarea;
    textarea.value=fixTxt(value, sorted);
    if (PUNCTUATIONS.has(value.at(-1))) {
        textarea.value=fixTxt(value, sorted);
        return;
    }
    const lastGroupStart = getLastGroupStart(value);
    
    if (
        !ALPHABET.has(value.at(-1)) && 
        !seeAlternative(value.slice(lastGroupStart), alternatives)
    ) {
        textarea.value=fixTxt(value, sorted);
    }
    else {
        textarea.value=
            fixTxt(value.slice(0, lastGroupStart), sorted)+ 
            value.slice(lastGroupStart);
    }
}