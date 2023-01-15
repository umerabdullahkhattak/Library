let myLibrary = [];

function Book(name, author, pages, status){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = status
    
}

Book.prototype.info = function(){
    if(this.status === false){
        return console.log(this.name + " " + "by " + this.author + "," + this.pages + " pages, " + "not read yet" )
    }
    else{
        return console.log(this.name + " " + "by " + this.author + "," + this.pages + " pages, "+ "read" )
    }
}

function addBookToLibrary(Book) {
  myLibrary.push(Book);

}





function displayBooks(){
    for(let x = 0; x < myLibrary.length; x++){
        myLibrary[x].info();
    }
}

function createBookForm() {
    let content = document.querySelector(".content");
    

    var form = document.createElement("form");
    form.classList.add("book-form")
    
    var nameField = document.createElement("input");
    nameField.classList.add("formfield")
    nameField.setAttribute("type", "text");
    nameField.setAttribute("placeholder", "Name");
    
    
    var authorField = document.createElement("input");
    authorField.classList.add("formfield")
    authorField.setAttribute("type", "text");
    authorField.setAttribute("placeholder", "Author");
    

    
    var pagesField = document.createElement("input");
    pagesField.classList.add("formfield")
    pagesField.setAttribute("type", "text");
    pagesField.setAttribute("placeholder", "Pages");
    
  
    var readingStatusField = document.createElement("input");
    readingStatusField.classList.add("formfield")
    readingStatusField.setAttribute("type", "text");
    readingStatusField.setAttribute("placeholder", "Reading Status");
    
    
    var submitButton = document.createElement("input");
    submitButton.classList.add("formfield")
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("value", "Submit");
    
    form.appendChild(submitButton);
    form.appendChild(readingStatusField);
    form.appendChild(pagesField);
    form.appendChild(authorField);
    form.appendChild(nameField);
    
    
    
    
    content.appendChild(form);
  }
  
let addBookButton = document.querySelector(".addBook")
addBookButton.addEventListener("click", (e) => {
    let content = document.querySelector(".content")
    createBookForm();
})