// check if the script is loaded successfully
// console.log("script added successfully");
// console.log(inputField, ulList);
const inputField = document.getElementById("item-input");
const ulList = document.querySelector(".items");
// get the form
const form = document.querySelector("#item-form");
const filter = document.getElementById("filter");

// add event listener to input field
form.addEventListener("submit", addItemHandler);
// add event listener to filter input
filter.addEventListener("input", filterItems);
document.addEventListener("DOMContentLoaded", addItemUi);
document.addEventListener("DOMContentLoaded", hideFilter);
function addItemHandler(e) {
  // prevent form submission
  e.preventDefault();
  //   get input value
  const inputValue = inputField.value.trim();
  // check if input is not empty
  if (inputValue !== "") {
    const textNode = document.createTextNode(inputValue);
    const li = document.createElement("li");
    const listItem = JSON.parse(localStorage.getItem("listItem")) ?? [];

    if (listItem) {
      listItem.push(inputValue);
    } else {
      listItem = [inputValue];
    }

    // store the updated list in local storage
    localStorage.setItem("listItem", JSON.stringify(listItem));

    // get button element
    const button = createButton("remove-item btn-link text-red");
    // append text node to list item
    li.appendChild(textNode);
    li.appendChild(button);
    ulList.appendChild(li);
    inputField.value = "";
  }
  hideFilter();
}

function addItemUi() {
  // get item form local storage
  const listItem = JSON.parse(localStorage.getItem("listItem"));

  if (listItem) {
    listItem.forEach((item) => {
      const textNode = document.createTextNode(item);
      const li = document.createElement("li");
      const button = createButton("remove-item btn-link text-red");
      li.appendChild(textNode);
      li.appendChild(button);
      ulList.appendChild(li);
    });
  }
}

// create button element
function createButton(classes) {
  const button = document.createElement("button");
  button.classList = classes;
  const iconElement = icon("fa-solid fa-xmark");
  button.appendChild(iconElement);
  return button;
}

// create favicon element
function icon(classes) {
  const icon = document.createElement("i");
  icon.classList = classes;
  return icon;
}

// clear all the items
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", clearItems);

function clearItems(e) {
  ulList.innerHTML = "";
  localStorage.removeItem("listItem");
  hideFilter();
}

//  remove elements by using event delegation
ulList.addEventListener("click", removeItem);

function removeItem(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    if (confirm("Are you sure you want to remove?")) {
      e.target.parentElement.parentElement.remove();

      // update the local storage
      const listItem = JSON.parse(localStorage.getItem("listItem"));
      const newListItem = listItem.filter((item) => {
        return e.target.parentElement.parentElement.textContent !== item;
      });
      updateLocalStroage(newListItem);
    }
  }
  hideFilter();
}

// update the local storage
function updateLocalStroage(arr) {
  localStorage.setItem("listItem", JSON.stringify(arr));
}

function checkItems() {
  const itemCount = ulList.childElementCount;
  // console.log(itemCount);

  return itemCount;
}

console.log(checkItems());

function hideFilter() {
  if (checkItems() == 0) {
    document.querySelector(".filter").style.display = "none";
    // document.querySelector("#item-list").remove();
  } else {
    document.querySelector(".filter").style.display = "block";
  }
}

function filterItems(e) {
  // console.log(e.target.value);
  const filterValue = e.target.value.toLowerCase();
  const items = document.querySelectorAll(".items li");
  items.forEach((item) => {
    const text = item.firstChild.textContent || item.firstChild.innerText;
    if (text.toLowerCase().indexOf(filterValue) > -1) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}
