async function getAlternatives(obj) {
    return await chrome.runtime.sendMessage({type: "dilbilgisi", function: "getAlternatives", input:obj});
};

async function textForeignInfo(paragraph) {
    return await chrome.runtime.sendMessage({type: "dilbilgisi", function: "textForeignInfo", input:paragraph});
};