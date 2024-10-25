import { ALPHABET } from "../utils/arrayify";
import { isForeign } from "../utils/dilbilgisi";
import { getCaret, setCaret } from "./editable-caret";
import { fixTxt, getAlternatives, getLastGroupStart, PUNCTUATIONS, sortedLoopable } from "./shared";

export function handleEditable(editable) {
    const alternatives = getAlternatives(editable.textContent);

    const sorted = sortedLoopable(alternatives);
    const lastTextNode = getLastText(editable);
    const replacer = returnReplacer(sorted, lastTextNode);
    const caretPos = getCaret(editable);

    walkTxt(editable, replacer);
    setCaret(editable, caretPos);
}

function walkTxt(element, replacer) {
    const children=element.childNodes;

    children.forEach(child => {
        if (child.nodeType === 1) {
            walkTxt(child, replacer);
        }else if (child.nodeType === 3) {
            replacer(child);
        }
    });
}

function returnReplacer(sorted, lastTextNode) {
    return (textnode) => { // mutation
        const { nodeValue } = textnode;
        if (textnode !== lastTextNode || PUNCTUATIONS.has(nodeValue.at(-1))) {
            textnode.nodeValue=fixTxt(nodeValue, sorted);
            return;
        }
        const lastGroupStart = getLastGroupStart(nodeValue);
        
        if (
            !ALPHABET.has(nodeValue.at(-1)) && 
            !isForeign(nodeValue.slice(lastGroupStart)).foreign
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
            const out = lastTextNode(child);
            if(out.nodeType) return out;
        }
    }
    return null;
}