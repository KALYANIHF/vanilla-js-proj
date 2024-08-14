// check if the script is loaded successfully
// console.log("script added successfully");
// console.log(inputField, ulList);
const inputField = document.getElementById("item-input");
const ulList = document.querySelector(".items");
// get the form
const form = document.querySelector("#item-form");
const filter = document.getElementById("filter");

// add event listener to filter input
filter.addEventListener("input", filterItems);
// add event listener to input field
form.addEventListener("submit", addItemHandler);

function addItemHandler(e) {
  // prevent form submission
  e.preventDefault();
  //   get input value
  const inputValue = inputField.value.trim();
  // check if input is not empty
  if (inputValue !== "") {
    const textNode = document.createTextNode(inputValue);
    const li = document.createElement("li");

    // get button element
    const button = createButton("remove-item btn-link text-red");
    // append text node to list item
    li.appendChild(textNode);
    li.appendChild(button);
    ulList.appendChild(li);
    inputField.value = "";
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
}

//  remove elements by using event delegation
ulList.addEventListener("click", removeItem);

function removeItem(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    if (confirm("Are you sure you want to remove?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
  hideFilter();
}

function checkItems() {
  const itemCount = ulList.childElementCount;
  return itemCount;
}
function hideFilter() {
  if (!checkItems()) {
    document.querySelector("#filter").remove();
    // document.querySelector("#item-list").remove();
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
