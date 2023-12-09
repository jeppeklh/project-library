const library = [];

function Book(title, author, pageNumber, haveRead) {
  this.title = title;
  this.author = author;
  this.pageNumber = pageNumber;
  this.haveRead = haveRead;
}

function addBookToLibrary() {}

const container = document.querySelector(".container");
const addBookButton = document.querySelector(".add-book-button");
const addBookMenu = document.querySelector(".modal");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const isReadCheckbox = document.getElementById("isRead");
const submit = document.querySelector(".btn");
const bookContainer = document.querySelector(".book-container");

addBookButton.addEventListener("click", bookPopUp);

function bookPopUp() {
  addBookMenu.classList.add("active");
}

submit.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior
  addBookToLibrary();
  displayLibrary();
});

// submit.addEventListener("click", clear);
// submit.addEventListener("click", removePopUp);

function removePopUp() {
  addBookMenu.classList.remove("active");
}

function clear() {
  title.value = "";
  author.value = "";
  pages.value = "";
}

function addBookToLibrary() {
  const titleValue = title.value.trim();
  const authorValue = author.value.trim();
  const pagesValue = parseInt(pages.value);

  const errorMessageElement = document.getElementById("error-message");

  if (titleValue === "" || authorValue == "" || isNaN(pagesValue)) {
    errorMessageElement.textContent = "Please fill in all fields with valid values";
    return;
  }

  errorMessageElement.textContent = "";

  const haveReadValue = isReadCheckbox.checked ? "Yes" : "No";
  const book = new Book(titleValue, authorValue, pagesValue, haveReadValue);
  library.push(book);
  console.log(library);
  clear();
  removePopUp();
}

function displayLibrary() {
  //clear existing content in container
  bookContainer.innerHTML = "";

  library.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("book-card");

    const readButton = document.createElement("button");
    readButton.classList.add("read-button");
    readButton.textContent = book.haveRead === "Yes" ? "Read" : "Not Read";
    readButton.addEventListener("click", () => toggleReadStatus(book));

    card.innerHTML = `<h2>${book.title}</h2> <p>${book.author}</p> <p>${book.pageNumber} pages</p>`;

    card.appendChild(readButton);
    bookContainer.appendChild(card);

    readButton.style.backgroundColor = book.haveRead === "Yes" ? "green" : "red";
  });
}

function toggleReadStatus(book) {
  // Toggle the haveRead value
  book.haveRead = book.haveRead === "Yes" ? "No" : "Yes";

  // Update the display
  displayLibrary();
}
