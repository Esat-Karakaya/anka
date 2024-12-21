const {sendMessage} = chrome.runtime;

async function textForeignInfo(...props) {
	const res = await sendMessage({type: "dilbilgisi", function: "textForeignInfo", input:[...props]});
	return res;	
};

function addWordCnt(addVal, site) {
	sendMessage({type: "word-count", site, addVal});
};