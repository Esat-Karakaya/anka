async function handleEditable(editable) {
    const alternatives = await textForeignInfo(editable.textContent);

    const sorted = sortedLoopable(alternatives);
    const lastTextNode = getLastText(editable);
    const replacer = returnReplacer(sorted, lastTextNode, alternatives);
    const caretPos = getCaret(editable);

    walkTxt(editable, replacer);
    setCaret(editable, caretPos);
}

function walkTxt(element, replacer) {
    const children=element.childNodes;

    for (const child of children) {
        if (child.nodeType === 1) {
            walkTxt(child, replacer);
        }else if (child.nodeType === 3) {
            replacer(child);
        }
    }
    
}

function returnReplacer(sorted, lastTextNode, alternatives) {
    return async (textnode) => { // mutation
        const { nodeValue } = textnode;
        if (textnode !== lastTextNode || PUNCTUATIONS.has(nodeValue.at(-1))) {
            textnode.nodeValue=fixTxt(nodeValue, sorted);
            return;
        }
        const lastGroupStart = getLastGroupStart(nodeValue);
        
        if (
            !ALPHABET.has(nodeValue.at(-1)) && 
            !seeAlternative(nodeValue.slice(lastGroupStart), alternatives)
        ) {
            textnode.nodeValue=fixTxt(nodeValue, sorted);
        }
        else {
            textnode.nodeValue=
                fixTxt(nodeValue.slice(0, lastGroupStart), sorted)+ 
                nodeValue.slice(lastGroupStart);
        }
    }
}

function getLastText(element) {
    const children = element.childNodes;

    for (let i = children.length-1; i >= 0; i--) {
        const child = children[i];
        if (child.nodeType===3) 
            return child;
        if (child.nodeType===1) {
            const out = getLastText(child);
            if(out?.nodeType) return out;
        }
    }
    return null;
}