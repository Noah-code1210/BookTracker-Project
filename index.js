const addBtn = document.querySelector(".add__btn");
const deleteBtn = document.querySelector(".delete__book--btn");
const dialog = document.querySelector("dialog");
const closeDialogBtn = document.querySelector(".close__form--btn");
const form = document.querySelector("form");

let myLibrary = [];

addBtn.addEventListener("click", () => {
  form
    .querySelectorAll("input[type='text'], input[type='number']")
    .forEach((input) => (input.value = ""));
  dialog.showModal();
});

closeDialogBtn.addEventListener("click", () => {
  dialog.close();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Creating new books

  const title = document.getElementById("bookTitle").value;
  const author = document.getElementById("bookAuthor").value;
  const pages = document.getElementById("bookPages").value;
  const readStatus = document.querySelector(
    "input[name='readStatus']:checked"
  ).value;
  const isRead = readStatus === "true";
  const book = new Book(title, author, pages, isRead);
  addBookToLibrary(book);
  dialog.close();
});

function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

Book.prototype.toggleStatus = function () {
  this.read = !this.read;
};
