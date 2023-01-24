//Array where all Book Objects are stored. 
let myLibrary = []; 


//Book Object

function Book(name, author, pages, status){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = status
    
}





// Function to add Book to Library
function addBookToLibrary(Book) {
  myLibrary.push(Book);

}










// Initializing all variables to be used in createBookForm()... 
// outside the function so they can be used outside function


let content = document.querySelector(".content");
let nameField = document.createElement("input");
let authorField = document.createElement("input");
let pagesField = document.createElement("input");
let readingStatusField = document.createElement("input");
let submitButton = document.createElement("button");
let formdiv = document.createElement('div');
formdiv.setAttribute('id','form');
var form = document.createElement("form");
let counter = 0;
let bookTileDiv = document.createElement("div");
bookTileDiv.classList.add("booktilediv");


//Function to generate form which would take book information.
// Function would apply when Add Book button is clicked.
function createBookForm() {
    
       bookTileDiv.style.display = "none"
    
        
        let form = document.createElement("form");
        form.classList.add("book-form")
        
        
        nameField.classList.add("formfield")
        nameField.setAttribute("type", "text");
        nameField.setAttribute("placeholder", "Name");
        
        
        
        
        authorField.classList.add("formfield")
        authorField.setAttribute("type", "text");
        authorField.setAttribute("placeholder", "Author");
        

        
        
        pagesField.classList.add("formfield")
        pagesField.setAttribute("type", "text");
        pagesField.setAttribute("placeholder", "Pages");
        
    
        
        readingStatusField.classList.add("formfield")
        readingStatusField.setAttribute("type", "text");
        readingStatusField.setAttribute("placeholder", "Reading Status");
        
        
        
        submitButton.innerHTML = "Add"
        submitButton.classList.add("submitButton")
        submitButton.setAttribute("type", "submit");
        submitButton.setAttribute("value", "Submit");
        
        
        
            
       
        
        form.appendChild(submitButton);
        form.appendChild(readingStatusField);
        form.appendChild(pagesField);
        form.appendChild(authorField);
        form.appendChild(nameField);
        
        formdiv.appendChild(form)
        
        
        content.appendChild(formdiv);
        
        
    
    
  }
 
//Calling createBookForm() function on clicking Add Book Button
  
let addBookButton = document.querySelector(".addBook");
addBookButton.addEventListener("click", (e) => {
    let content = document.querySelector(".content")
    
    createBookForm();
    
})


// Events to happen when submit button of form is clicked. 
// Events are: Getting data from the form and storing in the myLibrary[] and closing the form
submitButton.addEventListener('click', (e) => {
            bookTileDiv.style.display = "flex"
    let bookName = nameField.value;
    let authorName = authorField.value;
    let noOfPages = pagesField.value;
    let readingStatus = readingStatusField.value;
    let newBook = new Book(bookName, authorName, noOfPages, readingStatus);
    addBookToLibrary(newBook);
    console.log(myLibrary)
    content.removeChild(formdiv)
    nameField.value = "";
    authorField.value = "";
    pagesField.value = "";
    readingStatusField.value = "";
    showingBookTiles(counter);
    counter++;
    console.log(counter)
    
    
    
})
function showingBookTiles(counter){
    
   
    
    
    for(let x = counter; x< myLibrary.length; x++){
        let name = myLibrary[x].name;
        let author = myLibrary[x]. author;
        let NOP = myLibrary[x].pages;
        let status = myLibrary[x].status;
        let bookTile = document.createElement('div');
        bookTile.classList.add("bookTile");
        
        
        let tileName = document.createElement("h2");
        tileName.innerHTML = name;
        bookTile.appendChild(tileName);
        

        let tileAuthor = document.createElement("h2");
        tileAuthor.innerHTML = author;
        bookTile.appendChild(tileAuthor);

        let tilepages = document.createElement("h2");
        tilepages.innerHTML = NOP;
        bookTile.appendChild(tilepages);

        let tileStatus = document.createElement("h2");
        tileStatus.innerHTML = status;
        bookTile.appendChild(tileStatus);
        bookTileDiv.appendChild(bookTile)
        content.appendChild(bookTileDiv)
       
    }
}






