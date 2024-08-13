// check if the script is loaded successfully
// console.log("script added successfully");
// console.log(inputField, ulList);
const inputField = document.getElementById("item-input");
const ulList = document.querySelector(".items");
// get the form
const form = document.querySelector("#item-form");

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
