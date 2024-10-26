let books = [

    { title: "How will I be powercoder", author: "Linus", inStock: true, price: 12.99 },
    { title: "What can I do sometimes", author: "Dominic", inStock: false, price: 9.99 },
    { title: "Powerfull Software Tester", author: "Musti", inStock: true, price: 14.99 }
];



function displayBooks() {

    const bookList = document.getElementById('book-list');

    bookList.innerHTML = '';


    books.sort((a, b) => a.title.localeCompare(b.title));
    
    books.forEach(book => {
        const bookDiv = document.createElement('div');

        bookDiv.classList.add('book');
        
        const bookInfo = `
            <p><strong>${book.title}</strong> by ${book.author}</p>
            <p>${book.inStock ? "In Stock" : "Sold Out"}</p>
            <p>$${book.price.toFixed(2)}</p>
        `;

        bookDiv.innerHTML = bookInfo;

        bookList.appendChild(bookDiv);
    });
}


document.getElementById('book-form').addEventListener('submit', function(event) {

    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const price = parseFloat(document.getElementById('price').value);
    const inStock = document.getElementById('inStock').checked;

    books.push({ title, author, inStock, price });
    
    document.getElementById('book-form').reset();
  
    displayBooks();
});


displayBooks();