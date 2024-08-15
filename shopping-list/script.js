const inputField = document.getElementById("item-input");
const ulList = document.querySelector(".items");
const filter = document.getElementById("filter");
const submit_btn = document.querySelector(".btn");
const form = document.getElementById("item-form");
const clearBtn = document.querySelector("#clear");
let editmode = false;

// add event listeners

document.addEventListener("DOMContentLoaded", () => {
  const itemsFromLocalStorage = getToLocalStroage();
  if (itemsFromLocalStorage.length > 0) {
    itemsFromLocalStorage.forEach((item) => {
      addItemToDom(item);
    });
  }
  checkUi();
});
form.addEventListener("submit", onformSubmit);
filter.addEventListener("input", filterItems);
clearBtn.addEventListener("click", clearItems);
ulList.addEventListener("click", removeItem);
ulList.addEventListener("click", updateItem);
// function definations

function onformSubmit(e) {
  e.preventDefault();

  const inputValue = inputField.value;

  if (inputValue === "") {
    alert("Please enter a value before submitting");
    return;
  }

  const items = getToLocalStroage();
  if (items.includes(inputValue)) {
    alert("Duplicate value is not allowed");
    return;
  }

  if (editmode) {
    removeFromLocalStroage(
      document.querySelector(".selected-item").textContent
    );
    document.querySelector(".selected-item").remove();
    editmode = false;
    submit_btn.classList.remove("edit-btn");
    submit_btn.innerHTML = '<i class="fa-solid fa-plus"></i> Add Item';
  }
  addItemToDom(inputValue);
  addToLocalStroage(inputValue);
  checkUi();
}

function checkUi() {
  if (ulList.childElementCount == 0) {
    filter.style.display = "none";
    clearBtn.style.display = "none";
  } else {
    filter.style.display = "block";
    clearBtn.style.display = "block";
  }
}

function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;
  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}

function addItemToDom(item) {
  const textNode = document.createTextNode(item);
  const button = createButton("remove-item btn-link text-red");
  const li = document.createElement("li");
  li.appendChild(textNode);
  li.appendChild(button);
  ulList.appendChild(li);
  inputField.value = "";
}

function addToLocalStroage(item) {
  let items;
  items = getToLocalStroage();
  items.push(item);
  setLocalStroage(items);
}

function getToLocalStroage() {
  let items;
  if (localStorage.getItem("listItems") === null) {
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem("listItems"));
  }
  return items;
}

function removeFromLocalStroage(filter) {
  const items = getToLocalStroage();
  const newList = items.filter((item) => {
    return item !== filter;
  });
  setLocalStroage(newList);
}

function setLocalStroage(items) {
  localStorage.setItem("listItems", JSON.stringify(items));
}

function updateFromLocalStroage(item) {}

// filter features
function filterItems(e) {
  const filterValue = e.target.value.toLowerCase();
  const items = ulList.querySelectorAll("li");
  items.forEach((item) => {
    const text = item.firstChild.textContent || item.firstChild.innerText;
    if (text.toLowerCase().indexOf(filterValue) > -1) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}

// clear all features

function clearItems() {
  // update gui
  ulList.innerHTML = "";
  localStorage.removeItem("listItems");
  checkUi();
}

// delete one at a time
function removeItem(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    if (confirm("Are you sure you want to remove this item?")) {
      e.target.parentElement.parentElement.remove();
      removeFromLocalStroage(e.target.parentElement.parentElement.textContent);
      checkUi();
    }
  } else {
    return;
  }
}

function updateItem(e) {
  ulList.querySelectorAll("li").forEach((item) => {
    if (item === e.target) {
      item.classList.add("selected-item");
      inputField.value = item.textContent.trim();
      editmode = true;
      submit_btn.innerHTML = '<i class="fa-solid fa-pen"></i> Update Item';
      submit_btn.classList.add("edit-btn");
    } else {
      item.classList.remove("selected-item");
    }
  });
}

function stopDuplicateEntry(item) {}
