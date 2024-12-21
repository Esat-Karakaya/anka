import { textForeignInfo } from "../dilbilgisi/text-info.js";
import { addWordCnt } from "./word-count.js";

chrome.runtime.onMessage.addListener(
	(req, _sender, sendResponse) => {
		if (req.type!=="dilbilgisi") return;

		if (req.function === "textForeignInfo") {
			sendResponse(textForeignInfo(...req.input));
		}
	}
);

chrome.runtime.onMessage.addListener(
	req => {
		if (req.type==="word-count")
			addWordCnt(req.addVal, req.site);
	}
);