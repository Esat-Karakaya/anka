import { replaceForeign } from "./dilbilgisi.js";
import { textForeignInfo } from "./text-info.js";

chrome.runtime.onMessage.addListener(
    (request, _sender, sendResponse) => {
        if (request.type!=="dilbilgisi") return;

        switch (request.function) {
            case "getAlternatives":
                sendResponse(getAlternatives(request.input));
                break;    
            case "textForeignInfo":
                sendResponse(textForeignInfo(request.input));
        }
    }
);

//input -> obj[foreignRoot] = [...foreign originals]
//output -> obj[foreignOriginal] = local replacement
function getAlternatives(foreignOriginals) {
    const alternatives = {};

    const toBeFixed=Object.values(foreignOriginals).flat(1);

    for (const word of toBeFixed) {
        alternatives[word] = replaceForeign(word);
    }
    
    return alternatives;
}