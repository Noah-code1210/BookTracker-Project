function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.read ? "has been read" : "not read yet"
    }`;
  };

  const bookOne = new Book(
    "The Hobbit",
    "J.R.R. Tolkien",
    "295",
    true
  );
  bookOne.info()
}
