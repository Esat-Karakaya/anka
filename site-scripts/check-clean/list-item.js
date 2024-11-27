// select/unselect all option
function selectAllItem({selecteds, replacements, replaceList}) {
    const li=document.createElement("li");
    li.innerText="Hepsini Seç";

    // selection checkbox
    const select=document.createElement("input");
    select.setAttribute("type", "checkbox");
    select.classList.add("checkOption");

    select.addEventListener("change", (event) => {
        // when check all option is checked
        const checkBoxes = replaceList.querySelectorAll('input[type="checkbox"]');
    
        if (event.target.checked) {
            for (const element in replacements)
                selecteds[element] = replacements[element];
        }else
            selecteds.clear();
    
        for (const box of checkBoxes)
            box.checked=event.target.checked;
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
    const li=document.createElement("li");
    li.innerText=`${badWord} ➡️ ${replacements[badWord]}`;

    // selection checkbox
    const select=document.createElement("input");
    select.setAttribute("type", "checkbox");
    select.classList.add("checkOption");
    select.addEventListener(
        "change",
        getCheckHandler({
            selecteds,
            replacements,
            badWord,
            replaceList
        }),
    );

    li.prepend(select);

    return li;
}

function getCheckHandler({
    selecteds,
    replacements,
    badWord,
    replaceList
}) {
    // when checkbox is clicked
    return (event) => {

        if (event.target.checked) {
            selecteds[badWord] = replacements[badWord];
        } else {
            delete selecteds[badWord];
        }

        updateSelectAll(replaceList);
    }
}

// update select all checkbox
function updateSelectAll(ul) {
    const checkBoxes = [ ...ul.querySelectorAll('input[type="checkbox"]') ];
    const allChecked = checkBoxes.reduce((acc, cur, i) => {
        return !i || (cur.checked && acc);
    });

    checkBoxes[0].checked = allChecked;
}