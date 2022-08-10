//Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings

//write your code here

const favRecipe = {
  title: "Lasagna",
  servings: 6,
  ingredients: ["onion", "garlic", "ground meat", "lasagna pasta", "olive oil"],
};

//Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
//Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
//Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.

//write your code here

const books = [
  { title: "The prince", author: "Nicolo Machaveli", alreadyRead: false },
  { title: "The 48 laws of power", author: "Robert Green", alreadyRead: true },
  { title: "Mind set", author: "Dweck", alreadyRead: true },
  { title: "Eleven minutes", author: "Paulo Choelo", alreadyRead: true },
];

for (const book of books) {
  //   console.log(`${book.title} by ${book.author}`);
  if (book.alreadyRead === true) {
    console.log(`You have already read ${book.title} by ${book.author}`);
  } else {
    console.log(`You still need to read ${book.title} by ${book.author}`);
  }
}
