// select/unselect all option
function selectAllItem({selecteds, replacements, replaceList}) {
	const li=document.createElement("li");
	li.innerText="Hepsini Seç";

	// selection checkbox
	const select=document.createElement("input");
	select.setAttribute("type", "checkbox");
	select.classList.add("checkOption");

	select.addEventListener("change", event => {
		// when check all option is checked
		const checkBoxes = replaceList.querySelectorAll('input[type="checkbox"]');

		// must detach refrence to dom element
		const isChecked = event.target.checked;

		for (const box of checkBoxes){
			if ( box.checked!==isChecked ) {
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
	li.innerText=`${badWord} ➡️`;

	// disable if only one option exist
	const dropdown = document.createElement("select");
	if (replacements[badWord].length === 1) 
		dropdown.setAttribute("disabled", "")
	
	// add options
	for (const replacement of replacements[badWord]) {
		const option = document.createElement("option");
		option.innerText = replacement;
		dropdown.appendChild(option);
	}

	li.appendChild(dropdown);

	// selection checkbox
	const checkbox=document.createElement("input");
	checkbox.setAttribute("type", "checkbox");
	checkbox.classList.add("checkOption");
	checkbox.addEventListener(
		"change",
		getCheckHandler({
			selecteds,
			badWord,
			replaceList,
			dropdown,
		}),
	);

	li.prepend(checkbox);

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
		if (event.target.checked) {
			selecteds[badWord] = dropdown.options[dropdown.selectedIndex].text;;
		} else {
			delete selecteds[badWord];
		}

		updateSelectAll(replaceList, selecteds);
	}
}

// update select all checkbox
function updateSelectAll(ul, selecteds) {
	const checkBoxes = [ ...ul.querySelectorAll('input[type="checkbox"]') ];
	const allChecked = checkBoxes.reduce((acc, cur, i) => {
		return !i || (cur.checked && acc);
	});

	checkBoxes[0].checked = allChecked;
}