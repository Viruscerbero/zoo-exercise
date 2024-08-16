import { animals as listItems } from "../listItems/index.js";
// Keep a reference to the current selected item
let selected = null;

// Handle the styles of the selected listItem.
function handleSelection(currentTarget, onSelect, item) {
  // Unselect the previously selected item
  if (selected != null) {
    selected.classList.remove("selected");
  }

  // Make the current target the selected one
  currentTarget.classList.add("selected");

  // Store a reference to the current selected item
  selected = currentTarget;

  // Pick the item
  onSelect(item);
}

// Create a DOM NodeList of listItems
const listItemsNodeList = document.createDocumentFragment();

function List({ tag, onSelect }) {
  for (const item of listItems) {
    let divEl = document.createElement("div");

    divEl.className = "listItem";

    divEl.innerHTML = `<img src=${item.image} alt=${item.name} width="96" height="auto" />`;

    // The event listener can be removed by calling "divEl.removeEventListener("click", selectItem);"
    const selectItem = function (event) {
      handleSelection(event.currentTarget, onSelect, item);
    };
    divEl.addEventListener("click", selectItem);

    listItemsNodeList.appendChild(divEl);
  }

  // Append the DOM NodeList of listItems
  tag.appendChild(listItemsNodeList);
}

export { List };
