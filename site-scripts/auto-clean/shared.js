// returns a sorted Object.entries
// Sort is used to make sure smaller chunks
// of long words don't get replaced
function sortedLoopable(obj) {
    const entries = Object.entries(obj);
    entries.sort(comparator);

    return entries;
}

function comparator(a, b) {
    if (a[0].length<b[0].length) {
        return 1;
    }
     if (a[0].length>b[0].length) {
        return -1;
    }
    return 0;
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

// gets a word with nonsense chars at the end
// returns whether the word has alternative (i.e. is it foreign)
function seeAlternative(str, alternatives) {

    for (let i = str.length; i > -1; i--) {
        if (alternatives.hasOwnProperty(str.slice(0, i))) {
            return true;
        }
    }
    return false;
}

const PUNCTUATIONS = new Set([
    ".", ",", "?", "!", ":", ";", '"',
    "(", ")", "[", "]", "{", "}", "<", ">",
    "/", "\\", "|", "&", "@", "$", "%", "^", "*",
    "-", "+", "=", "_", "~", "`",
    "•", "…", "–", "—", "“", "”", "€", "¥", "£", "¢",
    "§", "¶", "©", "®", "™", "\n", "\t",
]);

const ALPHABET = new Set([
    "A", "a", "B", "b", "C", "c", "Ç", "ç", "D", "d", "E", "e", "F", "f", "G", "g", "Ğ", "ğ",
    "H", "h", "I", "ı", "İ", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "Ö", "ö",
    "P", "p", "R", "r", "S", "s", "Ş", "ş", "T", "t", "U", "u", "Ü", "ü", "V", "v", "Y", "y", "Z", "z",
    "'", "w", "W", "q", "Q", "x", "X"
]);