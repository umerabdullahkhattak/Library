let id = 0;
let myLibrary = [];
// function Book(title,author,pages) {
//   // the constructor...
//   this.title = title;
//   this.author = author;
//   this.pages = pages;

// }
// function addBookToLibrary(book) {
//   myLibrary.push(book)
//   // do stuff here
// }
// let book = new Book("The Idiot", "Dovestesky", 600)
// let book2 = new Book("The Idiot", "Dovestesky", 600)
// let book3 = new Book("The Idiot", "Dovestesky", 600)
// addBookToLibrary(book)
// addBookToLibrary(book2)
// addBookToLibrary(book3)
// console.log(myLibrary)

let form = document.getElementById('form')
form.addEventListener('submit', (e) =>{
  e.preventDefault();

  let title = document.getElementById("title").value;
 let author = document.getElementById("author").value;
 let pages = document.getElementById('pages').value;

 const books = document.getElementsByClassName("books-container")[0];
 books.innerHTML = null;
 myLibrary.push({title,author,pages,id});
 id++;
 myLibrary.map((obj)=>{
  let book = document.createElement("div");
  book.className = "book";
  const p1 = document.createElement("p");
  p1.innerText = obj.title;
  const p2 = document.createElement("p")
  p2.innerText = obj.author;
  const p3 = document.createElement("p")
  p3.innerText  = obj.pages;
  book.appendChild(p1);
  book.appendChild(p2);
  book.appendChild(p3);
  books.append(book);
 })
 console.log(myLibrary);
closeForm();
})




let submit = document.getElementById("submitbtn");





function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("title").value = "";
   document.getElementById("author").value = "";
  document.getElementById('pages').value="";
 
  document.getElementById("myForm").style.display = "none";
}
