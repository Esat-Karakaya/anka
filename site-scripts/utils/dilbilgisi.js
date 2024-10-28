function isForeign(word) {

    word=word.toLocaleLowerCase('tr');
    
    if (word.includes(" ")) { // word is made up of two words
        const result = isTwoWordForeign(word);

        if (result.twoWord) return result;
    }

    for (let i = word.length; i > 1; i--) {
        const sliced = word.slice(0, i);
        const replacement = nouns[sliced] ?? verbs[sliced];
        
        if (replacement) {
            return {
                foreign: true,
                rootForeign: sliced,
                rootLocal: replacement,
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
            rootLocal: nouns[rootForeign] ?? verbs[rootForeign]
        }
    }

    return {twoWord: false};
}

function replaceForeign(word) { // NEEDS IMPROVEMENT
    return isForeign(word).rootLocal;
}

function localeCap(str) {
    let cpy="";

    if (str[0]==="i") cpy+="İ";
    else cpy+=str[0];

    for (let i = 1; i < str.length; i++) cpy+=str[i];

    return cpy;
}