const showAddBtn = document.querySelector(".books > button");
const addBtn = document.querySelector(".add > button");
const overlay = document.querySelector(".overlay");
const cardInfo = document.querySelector(".card-info");
const bookRead = document.querySelector(".isBookRead > #read");
const bookNotRead = document.querySelector(".isBookRead > #not-read");
const bookTitle = document.querySelector(".book-title > input");
const bookAuthor = document.querySelector(".book-author > input");
const bookPages = document.querySelector(".book-pages > input");
const bookCardsContainer = document.querySelector(".book-cards");
const cardBlueprint = document.querySelector(".book-cards > div");
const bookCard = cardBlueprint.cloneNode(true);


bookCardsContainer.firstElementChild.remove();

let arr = [];

function makeBookCard(title, pages, author, isRead){

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;


}

showAddBtn.addEventListener("click", () => {
    overlay.classList.add("show");
    cardInfo.classList.add("show");
});

overlay.addEventListener("click", () => {
    overlay.classList.remove("show");
    cardInfo.classList.remove("show");
});

addBtn.addEventListener("click", () => {
    let bookItem = bookCard.cloneNode(true);
    let children = bookItem.children;
    
    let book = new makeBookCard(bookTitle.value, bookPages.value, bookAuthor.value,  "Read"); 

    children[0].textContent = `"${book.title}"`; 
    children[1].textContent = book.pages; 
    children[2].textContent = `"${book.author}"`; 
    children[3].textContent = book.isRead; 


    arr.push(bookItem)
    bookCardsContainer.appendChild(bookItem);
    console.log(bookItem);
    console.log(arr)
})