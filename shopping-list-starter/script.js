let shoppingListItems = ["milk", "eggs", "bread"];
const newItemText = document.getElementById("new-item-text");

const clearInput = () => {
  newItemText.value = "";
};

const clearList = () => {
  const listElement = document.getElementById("shopping-list-items");
  listElement.innerHTML = "";
};

const addItem = () => {
  const item = document.getElementById("new-item-text").value;
  //Deconstruct array using ...
  shoppingListItems = [...shoppingListItems, item];
  updateItems();
};

const updateItems = () => {
  // First we get the list element - (already used this code in clearList but not sure how to make it DRY)
  const listElement = document.getElementById("shopping-list-items");
  // Then we clear it of any existing items
  listElement.innerHTML = "";

  // Then we loop through the shopping list items and add them to the list
  for (const shoppingItem of shoppingListItems) {
    let itemElement = document.createElement("li");
    itemElement.innerText = shoppingItem;
    listElement.appendChild(itemElement);
  }
  clearInput();
};

updateItems();
