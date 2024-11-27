import { textForeignInfo } from "./text-info.js";

chrome.runtime.onMessage.addListener(
    (request, _sender, sendResponse) => {
        if (request.type!=="dilbilgisi") return;

        if (request.function === "textForeignInfo") {
            sendResponse(textForeignInfo(...request.input));
        }
    }
);
