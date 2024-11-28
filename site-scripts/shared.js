async function textForeignInfo(...props) {
	const res = await chrome.runtime.sendMessage({type: "dilbilgisi", function: "textForeignInfo", input:[...props]});
	return res;	
};