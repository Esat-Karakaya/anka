// select/unselect all option
function selectAllItem({replaceList}) {
	const li=document.createElement("li");
	li.innerText="Hepsini Seç";

	// selection checkbox
	const select=document.createElement("div");
	select.setAttribute("checked", "false");
	select.classList.add("checkOption");

	select.addEventListener("click", () => {
		const oldState = select.getAttribute("checked");
		const newState = nextState(oldState);
		select.setAttribute("checked", newState);
		// when check all option is checked
		const checkBoxes = replaceList.querySelectorAll(`div[checked=${oldState}]`);

		for (const box of checkBoxes){
			if ( box.getAttribute("checked")!==newState ) {
				box.click();
			}
		}
	});

	li.prepend(select);

	return li;
}

// creates a list item
function newListItem({
	selecteds,
	replacements,
	badWord,
	replaceList
}) {
	const li = document.createElement("li");

	const showReplacement = document.createElement("div");
	showReplacement.classList.add("showReplacement")
	const foreign = document.createElement("del");
	foreign.innerText = badWord;
	showReplacement.appendChild(foreign);

	const dropdown = document.createElement("select");

	dropdown.addEventListener("change", () => {
		if (selecteds[badWord])
			selecteds[badWord] = dropdown.options[dropdown.selectedIndex].text;
	})

	// disable select if only one option exist
	if (replacements[badWord].length === 1) 
		dropdown.setAttribute("disabled", "")
	
	// add options
	for (const replacement of replacements[badWord]) {
		const option = document.createElement("option");
		option.innerText = replacement;
		dropdown.appendChild(option);
	}

	showReplacement.appendChild(dropdown);

	// selection checkbox
	const checkbox=document.createElement("div");
	checkbox.setAttribute("checked", "false");
	checkbox.classList.add("checkOption");
	checkbox.addEventListener(
		"click",
		getCheckHandler({
			selecteds,
			badWord,
			replaceList,
			dropdown,
		}),
	);

	li.appendChild(checkbox);
	li.appendChild(showReplacement);

	return li;
}

function getCheckHandler({
	selecteds,
	badWord,
	replaceList,
	dropdown,
}) {

	// when checkbox is clicked
	return (event) => {
		const oldState = event.target.getAttribute("checked");
		const newState = nextState(oldState);
		event.target.setAttribute("checked", newState);
		if (newState === "true") {
			selecteds[badWord] = dropdown.options[dropdown.selectedIndex].text;
		} else {
			delete selecteds[badWord];
		}

		updateSelectAll(replaceList);
	}
}

// update select all checkbox
function updateSelectAll(ul) {
	const selectAll = ul.firstChild.firstChild;
	const allCnt = ul.children.length-1;
	let checkeds = ul.querySelectorAll('[checked=true]');
	let checkedsCnt = checkeds.length;

	// exlude selectAll
	if (checkeds[0] === selectAll) 
		checkedsCnt--;

	if (checkedsCnt === allCnt){
		selectAll.setAttribute("checked", "true");
		return
	}
	selectAll.setAttribute("checked", "false");
}

function nextState(str) {
	return str==="true" ? "false" : "true";
}