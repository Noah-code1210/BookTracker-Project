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

// function Player(name, marker) {
//   this.name = name;
//   this.marker = marker;
//   this.sayName = function () {
//     console.log(this.name);
//   };
// }

// const player1 = new Player("steve", "X");
// const player2 = new Player("also steve", "O");
// player1.sayName(); // logs 'steve'
// player2.sayName(); // logs 'also steve'

// Player.prototype.sayHello = function () {
//   console.log("Hello, I'm a player!");
// };

// player1.sayHello(); // logs "Hello, I'm a player!"
// player2.sayHello(); // logs "Hello, I'm a player!"

// Player.prototype.showMarker = function() {
//     console.log(this.marker)
// }

// player1.showMarker();
// player2.showMarker();

function Person(name) {
    this.name = name
}
Person.prototype.sayName = function() {
    console.log(`Hi, my name is ${this.name}`)
}

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}
Player.prototype.showInfo = function () {
    console.log(`I am using ${this.marker} as my marker`)
}

Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.getPrototypeOf(Player.prototype, Person.prototype);

const player1 = new Player('Steve', 'X');
const player2 = new Player('Amy', 'O');
player1.sayName()
player2.sayName()
player1.showInfo()
