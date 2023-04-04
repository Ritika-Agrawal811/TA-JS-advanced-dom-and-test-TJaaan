const itemList = document.getElementById("itemList");
const input = document.getElementById("itemTitle");
const icon = document.getElementById("addItemIcon");
let dragSrcEl;

function addItem(title) {
  let li = document.createElement("li");
  li.innerHTML = title;
  li.setAttribute("draggable", true);
  li.addEventListener("dragstart", handleDragStart);
  li.addEventListener("dragover", handleDragOver);
  li.addEventListener("dragenter", handleDragEnter);
  li.addEventListener("dragleave", handleDragLeave);
  li.addEventListener("dragend", handleDragEnd);
  li.addEventListener("drop", handleDrop);

  itemList.append(li);
}

function handleDragStart(event) {
  this.style.opacity = 0.5;

  dragSrcEl = this;
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/html", this.innerHTML);
}

function handleDragEnd(event) {
  this.style.opacity = 1;
}

function handleDragOver(event) {
  event.preventDefault();
  return false;
}

function handleDragEnter(event) {
  this.classList.add("over");
}

function handleDragLeave(event) {
  this.classList.remove("over");
}

function handleDrop(event) {
  event.stopPropagation(); // stops the browser from redirecting.

  if (dragSrcEl !== this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = event.dataTransfer.getData("text/html");
    dragSrcEl.classList.remove("over");
  }

  this.classList.remove("over");
  return false;
}

input.addEventListener("keydown", (event) => {
  console.log(event.key);
  if (event.key == "Enter") {
    let title = input.value;

    addItem(title);

    input.value = "";
  }
});

icon.addEventListener("click", () => {
  let title = input.value;

  if (title) {
    addItem(title);

    input.value = "";
  }
});
