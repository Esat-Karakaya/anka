async function getAlternatives(obj) {
    const res = await chrome.runtime.sendMessage({type: "dilbilgisi", function: "getAlternatives", input:obj});
    return res;    
};

async function textForeignInfo(paragraph) {
    const res = await chrome.runtime.sendMessage({type: "dilbilgisi", function: "textForeignInfo", input:paragraph});
    return res;    
};