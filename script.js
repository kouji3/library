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
const errorBox = document.querySelector(".error-box");


bookCardsContainer.firstElementChild.remove();

let arr = [];
let isRead = false;
let bookStatus;
let isReadOrNotClicked = false;


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
    
    if(isRead){
        bookStatus = "Read";
    } else {
        bookStatus = "Not read";
    }
    
    let book = new makeBookCard(bookTitle.value, bookPages.value, bookAuthor.value,  bookStatus); 

    children[0].textContent = `" ${book.title} "`; 
    children[1].textContent = `${book.pages} pages`; 
    children[2].textContent = `" ${book.author} "`; 
    children[3].textContent = book.isRead; 

    doHover(bookStatus, children[3]);
    arr.push(bookItem);

    checkValidity(bookTitle.value, bookAuthor.value, bookPages.value, bookCardsContainer, bookItem);
   
    
    bookTitle.value = "";
    bookPages.value = "";
    bookAuthor.value = "";


    console.log(bookItem);
    console.log(bookPages.value === "")
});


bookRead.addEventListener('click', () => {
    isRead = true;
    isReadOrNotClicked = true;
    
});

bookNotRead.addEventListener('click', () => {
    isRead = false;
    isReadOrNotClicked = true;
});


function doHover(status, targeted){
    if(status === "Read"){
        targeted.classList.remove("isRead");
        targeted.classList.add("isReadX");
    }

    if(status === "Not Read"){
        targeted.classList.remove("isReadX");
        targeted.classList.add("isRead");
    }

}



function checkValidity(titleInput, authorInput, pagesInput, bookContainer, bookInstance){

        if(titleInput === "" || authorInput === "" || pagesInput === ""){
            errorBox.textContent = "Please Fill out The missing inputs";
            errorBox.classList.add("show");

            setTimeout(() => {
                errorBox.classList.remove("show")
            }, 3000);
        } else {
            bookContainer.appendChild(bookInstance);
            setTimeout(() => {
                overlay.classList.remove("show");
                cardInfo.classList.remove("show");
            }, 1)
        }
       


}