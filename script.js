let myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here
  let title = window.prompt("Book title?");
  let author = window.prompt("Author?");
  let pages = window.prompt("Number of pages?");
  let read = window.prompt("Have you read this book?");
  let book = new Book(title, 'a','b','c');
  myLibrary.push(book);
  console.log(myLibrary);
}

const button=document.querySelector("button");
button.addEventListener('click', function(){
    addBookToLibrary();
});