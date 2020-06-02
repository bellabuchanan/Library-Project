let myLibrary = [];

const add = document.getElementById('new-book');
const formContainer = document.querySelector('.form-container');

// book constructor
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    // this.read = read;
    }

// prototypical inheritance to display book info
Book.prototype.info = function(){
    return `${this.title} by the distinguished: ${this.author}, containing ${this.pages} pages`;
}

// form pops up
add.addEventListener('click', function(){
    formContainer.style.display = "block";    
});

// get rid of form 
const remove = document.getElementById('close-form');
remove.addEventListener('click', function(){
    formContainer.style.display = "none";  
    console.log('clearing');
})

// submit form 
const submit = document.getElementById('submit-btn');

submit.addEventListener('click', function(){
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
    const pages = document.getElementById('pages').value;
    
    // add book to library 
    let book = new Book(title,author,pages);
    myLibrary.push(book);
    
    // display entire library 
    displayInLibrary(myLibrary);
})

// display all books
const tableBody = document.getElementById('table');
function displayInLibrary(library) {
    books = "";
    library.forEach(item => {
        const row = document.createElement('tr');
        row.dataset.position = library.indexOf(item);
        row.innerHTML = `
          <td>${item.title}</td>
          <td>${item.author}</td>
          <td>${item.pages}</td>`
        tableBody.appendChild(row);
})};
