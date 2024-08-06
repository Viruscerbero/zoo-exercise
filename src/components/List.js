import { animals as listItems } from "../listItems/index.js";

function List({ tag, onSelect }) {
  // Create a DOM NodeList of listItems
  const listItemsNodeList = document.createDocumentFragment();

  for (const animal of listItems) {
    let divEl = document.createElement("div");

    divEl.className = "listItem";

    divEl.innerHTML = `<img src=${animal.image} alt=${animal.name} width="96" height="auto" />`;

    divEl.addEventListener("click", (event) => {
      // Make the current target the only one selected
      handleSelection(event.currentTarget);

      // Pick the animal
      onSelect(animal);
    });

    listItemsNodeList.appendChild(divEl);
  }

  // Append the DOM NodeList of listItems
  tag.appendChild(listItemsNodeList);

  // Handle the styles of the selected listItem and the unselected ones
  function handleSelection(currentTarget) {
    // Unselect any animal selected before
    for (let i = 0; i < tag.childNodes.length; i++) {
      let item = tag.childNodes[i];

      item.classList.remove("selected");
    }

    // Make the current target the selected one
    currentTarget.classList.add("selected");
  }
}

export { List };
