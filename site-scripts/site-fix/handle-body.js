// wrapped around an object to prevent name clashing with auto-clean 
function siteFixUtils() {
	const cleanables = new Set([
		"A", "ARTICLE", "ASIDE", "B", "BLOCKQUOTE", "CAPTION", "COL", "COLGROUP",
		"DEL", "DETAILS", "DIALOG", "DIV", "EM", "FIGCAPTION", "FIGURE", "FIELDSET",
		"FORM", "H1", "H2", "H3", "H4", "H5", "H6", "HEADER", "LABEL", "LEGEND",
		"LI", "MAIN", "MARK", "MENU", "NOSCRIPT", "OL", "P", "PRE", "SAMP",
		"SECTION", "SPAN", "STRONG", "SUMMARY", "TEXTAREA", "UL",
	]);

	// returns a sorted Object.entries
	// Sort is used to make sure smaller chunks
	// of long words don't get replaced
	function sortedLoopable(obj) {
		const entries = Object.entries(obj);
		entries.sort(comparator);

		return entries;
	}

	function comparator(a, b) {
		if (a[0].length < b[0].length) {
			return 1;
		}
		if (a[0].length > b[0].length) {
			return -1;
		}
		return 0;
	}

	function walkTxt(element, replacer) {
		const children=element.childNodes;

		children.forEach(child => {
			if (
				child.nodeType === 1 &&
				cleanables.has(child.tagName)
			) {
				walkTxt(child, replacer);
			}else if (child.nodeType === 3) {
				replacer(child);
			}
		});
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

	return {
		sortedLoopable,
		walkTxt,
		returnReplacer
	}
}