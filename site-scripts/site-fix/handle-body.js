// wrapped around an object to prevent name clashing with auto-clean 
function siteFixUtils() {
	const cleanables = document.querySelectorAll("a, b, blockquote, caption, del, details, div, em, figcaption, h1, h2, h3, h4, h5, h6, input, label, legend, li, mark, noscript, p, pre, s, samp, section, span, strong, summary, textarea, title");

	// returns a sorted Object.entries
	// Sort is used to make sure smaller chunks
	// of long words don't get replaced
	function sortedLoopable(obj) {
		const entries = Object.entries(obj);
		entries.sort(comparator);

		return entries;
	}

	function comparator(a, b) {
		if (a[0].length < b[0].length)
			return 1;
		if (a[0].length > b[0].length)
			return -1;
		return 0;
	}

	function walkTxt(textHandler) {
		// Array moved closer to improve performance
		const closerCleanables = cleanables;
		for (const element of closerCleanables) {

			element.childNodes.forEach(child => {
				if (child.nodeType === Node.TEXT_NODE)
					textHandler(child); // handle all text nodes
			});
		}
	}

	function returnReplacer(sorted) {
		return (textnode) => { // mutation
			let { nodeValue: rawStr } = textnode;

			for (const pair of sorted) {
				rawStr = rawStr.replaceAll(pair[0], pair[1]);
			}

			textnode.nodeValue=rawStr;
			return;
		}
	}

	function getTexts() {
		let contentText = "";

		walkTxt((textnode)=>contentText += " "+textnode.nodeValue);

		return contentText;
	}

	return {
		sortedLoopable,
		walkTxt,
		returnReplacer,
		getTexts
	}
}