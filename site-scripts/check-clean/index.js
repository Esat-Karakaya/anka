// elements that has buttons
const spotteds = new Set();

document.addEventListener("click", async () => {
	const focused = document.activeElement;

	/* add button to selected writables */
	if ( // clicked tag is not writable
		(
			!(focused.tagName==="DIV") ||
			!(focused.getAttribute("contenteditable")==="true")
		) &&
		!(focused.tagName==="TEXTAREA")
	) {
		return; 
	}

	else if (spotteds.has(focused)){ return; } // already added

	else { // add new
		spotteds.add(focused);
		addGui(focused, spotteds.size);
	}
});

function addGui(focused, id) { // mutations
	// add clear prototype to selectedForeign
	const clearPrototype = {
		clear() {
			for (const badWord in this)
				delete this[badWord];
		},
	};
	const selectedForeigns = Object.create(clearPrototype);

	const gui = newGui(whenVisible, id, applyHandler);

	async function whenVisible() { // when popover is visible
		const element = 
		focused.tagName==="DIV"?
			focused.textContent:
			focused.value
		
		const replacements = await (textForeignInfo(element, true));

		const popover = document.getElementById(`suggest${id}`);

		selectedForeigns.clear();
		listAlternatives({
			replacements,
			container: popover,
			selecteds: selectedForeigns,
		});
	}

	// When apply button is clicked
	function applyHandler() {
		// fix writable element
		localizeText(focused, selectedForeigns);

		// Count number of fixed words
		const foreignCnt=Object.keys(selectedForeigns).length;
		const hostname=window.location.hostname;
		addWordCnt(foreignCnt, hostname);
	}

	focused.before(gui);
}

