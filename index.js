// function Book(title, author, pages, read) {
//   if (!new.target) {
//     throw Error("You must use the 'new' operator to call the constructor");
//   }
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
//   this.sayInfo = function () {
//     console.log(
//       `${this.title} by ${this.author} has ${this.pages} pages and ${
//         this.read
//           ? "has been read by Noah Cole"
//           : "has not been read by Noah Cole"
//       }`
//     );
//   };
// }

const reader1 = new Book("The Hobbit", "J.R.R Tolkien", "295", true);
const reader2 = new Book(
  "The Lord of the Rings",
  "J.R.R Tolkien",
  "398",
  false
);
reader1.sayInfo(); // logs 'steve'
reader2.sayInfo(); // logs 'also steve'
