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
function localizeText(element, checkeds) {
    // sorted desc to prevent shorter words to replace a portion of longer words
    const sorted = Object.entries(checkeds).sort(comparator);

    const replacer = (str)=>{ // replace foreign word inside string
        for (const pair of sorted) {
            str = str.replaceAll(pair[0], pair[1]);
        }
        return str;
    }
    if (element.tagName==="DIV") {
        walkDiv(element,replacer);
        return;
    }
    walkTextArea(element,replacer);
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