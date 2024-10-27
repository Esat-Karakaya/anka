// returns a sorted Object.entries
// Sort is used to make sure smaller chunks
// of long words don't get replaced
function sortedLoopable(obj) {
    const entries = Object.entries(obj);
    entries.sort(comaparator);

    return entries;
}

function comaparator(a, b) {
    if (a[0].length<b[0].length) {
        return 1;
    }
     if (a[0].length>b[0].length) {
        return -1;
    }
    return 0;
}

// returns an object where obj[foreignWord] is localWord
function getAlternatives(str) {
    const { rootOriginals } = textForeignInfo(str);
    
    const alternatives = {};

    const toBeFixed=Object.values(rootOriginals).flat(1);

    toBeFixed.forEach( word =>
        alternatives[word] = replaceForeign(word)
    );

    return alternatives;
}

function fixTxt(str, loopable) {
    let tobefixed=str;
    for (const pair of loopable) {
        tobefixed = tobefixed.replaceAll(pair[0], pair[1]);
    }

    return tobefixed;
}

/*
    if string ends with non alphabetical char
    it will return the last word's start index
    else it will return the second last word's start index
*/
function getLastGroupStart(str) {
    let doubleStart = str.length-1;

    for (; doubleStart >= 0; doubleStart--)
        if (!ALPHABET.has(str[doubleStart]))
            break;
    for (; doubleStart >= 0; doubleStart--)
        if (ALPHABET.has(str[doubleStart]))
            break;
    
    for (; doubleStart >= 0; doubleStart--)
        if (!ALPHABET.has(str[doubleStart]))
            break;
    
    return ++doubleStart;
}

const PUNCTUATIONS = new Set([
    ".", ",", "?", "!", ":", ";", '"',
    "(", ")", "[", "]", "{", "}", "<", ">",
    "/", "\\", "|", "&", "@", "$", "%", "^", "*",
    "-", "+", "=", "_", "~", "`",
    "•", "…", "–", "—", "“", "”", "€", "¥", "£", "¢", "§", "¶", "©", "®", "™",
]);