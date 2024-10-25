function isForeign(word) {

    word=word.toLocaleLowerCase('tr');
    let apoi = word.indexOf("'");
    if (apoi>-1) { // has the "'" symbol
        const sliced = word.slice(0, word.indexOf("'"));
        if (nouns[sliced]) {
            return {
                foreign: true,
                rootForeign: sliced,
                rootLocal: nouns[sliced],
            };
        }
        return {foreign: false};
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