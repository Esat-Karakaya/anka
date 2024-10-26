
// recursively find text nodes
function walkDiv(element, replacer) {
    const children=element.childNodes;

    children.forEach(child => {
        if (child.nodeType === 1) {
            walkDiv(child, replacer);
        }else if (child.nodeType === 3) {
            child.nodeValue=replacer(child.nodeValue);
        }
    });
}

// fix textarea
function walkTextArea(element, replacer) {
    element.value=replacer(element.value)
}

// replace foreign word inside writables
function localizeText(element, checkeds, originals) {
    const alternative={};
    const loopable = Object.entries(originals);

    for (const pair of loopable) {
        if (!checkeds.has(pair[0])) continue;

        for (const original of pair[1]) {
            alternative[original] = replaceForeign(original);
        }
    }

    // sorted desc to prevent shorter words to replace a portion of longer words
    const sorted = Object.entries(alternative).sort(comaparator);

    const replacer = (str)=>{ // replace foreign word inside text nodes
        for (const pair of sorted) {
            str = str.replaceAll(pair[0], pair[1]);
        }
        return str;
    }
    if (element.tagName==="DIV") {
        walkDiv(element,replacer);
        return;
    }
    walkTextArea(element,replacer)
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