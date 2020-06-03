let myLibrary = [];

const add = document.getElementById('new-book');
const formContainer = document.querySelector('.form-container');

// book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read ? 'Yes' : 'No';;

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

const title = document.getElementById('book-title');
const author = document.getElementById('book-author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');
submit.addEventListener('click', function(e){
    e.preventDefault()
    const titleTable = title.value;
    const authorTable = author.value;
    const pagesTable = pages.value;
    const readTable = read.value;
    
    // add book to library 
    let book = new Book(titleTable,authorTable,pagesTable, readTable);
    
    myLibrary.push(book);
    
    // display entire library 
    displayInLibrary(myLibrary);
    formContainer.style.display = "none"; 

    
})


// display all books
const table = document.querySelector('.table');
const tableBody = document.getElementById('table-body');
function displayInLibrary(library) {
    bookAdded = library[library.length - 1];
    console.log(bookAdded);
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${bookAdded.title}</td>
        <td>${bookAdded.author}</td>
        <td>${bookAdded.pages}</td>
        <td><button class="change-status">${bookAdded.read}</button></td>`
    tableBody.appendChild(row);
    
        
};

document.querySelector('.tbody').addEventListener('click', (e) => {
    if (e.target.className === 'change-status') {
        if (e.target.textContent === 'Yes') {
            e.target.textContent = 'No';       
        } else {
            e.target.textContent = 'Yes';
            
        }
    }
})


let aBook = new Book("test","bella","10");
myLibrary.push(aBook);
displayInLibrary(myLibrary);
console.log(aBook.pages);

