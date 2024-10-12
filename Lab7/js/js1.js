let holderItem;

function dStart(event) {
  holderItem = event.target;
}

function nDrop(event) {
  event.preventDefault();
}

function dDrop(event) {
  event.preventDefault();
  if (event.target.className.includes("box")) {
    event.target.appendChild(holderItem);
  }
}