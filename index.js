const books = document.querySelector(".books");
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

function createBookCard(book, bookId) {
  const newCard = document.createElement("div");
  newCard.classList.add("book__info--wrapper");
  newCard.id = bookId;

  const cardContent = document.createElement("div");
  cardContent.classList.add("book__info");
  newCard.appendChild(cardContent);

  const title = document.createElement("div");
  title.textContent = `${book.title}`;
  title.classList.add("book__title");
  cardContent.appendChild(title);

  const author = document.createElement("div");
  author.textContent = `By: ${book.author}`;
  author.classList.add("book__author");
  cardContent.appendChild(author);

  const pages = document.createElement("div");
  pages.textContent =`Pages: ${book.pages} pages`;
  pages.classList.add("book__pages");
  cardContent.appendChild(pages);

  const readStatus = document.createElement("div");
  readStatus.classList.add("book__read--status");
  readStatus.appendChild(document.createTextNode("Status: "));

  const statusValue = document.createElement("span");
  statusValue.classList.add("book__status");
  statusValue.textContent = book.read ? "Finished" : "Not Started";
  readStatus.appendChild(statusValue);
  cardContent.appendChild(readStatus);

  const cardActions = document.createElement("div");
  cardActions.classList.add("card-actions");
  newCard.appendChild(cardActions);

  const switchStatusBtn = document.createElement("button");
  switchStatusBtn.textContent = "Change Read Status";
  switchStatusBtn.classList.add("edit__btn");
  cardActions.appendChild(switchStatusBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete Book";
  deleteBtn.classList.add("edit__btn", "delete__btn");
  cardActions.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", (event) => {
    const parentCard = event.target.closest(".book__info--wrapper");
    const bookId = parentCard.id;
    myLibrary = myLibrary.filter((book) => book.id !== bookId);
    displayLibrary();
  });

  switchStatusBtn.addEventListener("click", () => {
    book.toggleStatus();
    displayLibrary();
  });

  return newCard;
}

function addBookToLibrary(book) {
  myLibrary.push(book);

  displayLibrary();
}

function displayLibrary() {
  books.innerHTML = "";
  myLibrary.forEach((book) => {
    const bookId = book.id;
    const newBookCard = createBookCard(book, bookId);
    books.appendChild(newBookCard);
  });
}

const hobbit = new Book("The Hobbit", "J.R.R Tolkien", "295", true);
const onTheRun = new Book("On The Run", "Brodie Cole", "476", false)
const narnia = new Book("The Lion The Witch and the Wardrobe", "C.S. Lewis", "88", true)

myLibrary.push(hobbit, onTheRun, narnia);

displayLibrary(myLibrary);
