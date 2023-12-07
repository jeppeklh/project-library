const library = [];

function Book(title, author, pageNumber, haveRead) {
  this.title = title;
  this.author = author;
  this.pageNumber = pageNumber;
  this.haveRead = haveRead;
}

function addBookToLibrary() {}

const addBookButton = document.querySelector(".add-book-button");
const addBookMenu = document.querySelector(".modal");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const isReadCheckbox = document.getElementById("isRead");
const submit = document.querySelector(".btn");

addBookButton.addEventListener("click", bookPopUp);

function bookPopUp() {
  addBookMenu.classList.add("active");
}

submit.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior
  addBookToLibrary();
});

submit.addEventListener("click", clear);

function clear() {
  title.value = "";
  author.value = "";
  pages.value = "";
}

function addBookToLibrary() {
  const haveReadValue = isReadCheckbox.checked ? "Yes" : "No";
  const book = new Book(title.value, author.value, pages.value, haveReadValue);
  library.push(book);
  console.log(library);
}
