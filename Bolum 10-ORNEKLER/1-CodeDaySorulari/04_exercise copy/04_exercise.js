let books = [
    { title: "How will I be powercoder", author: "Linus", inStock: true, price: 12.99 },
    { title: "What can I do sometimes", author: "Dominic", inStock: false, price: 9.99 },
    { title: "Powerfull Software Tester", author: "Musti", inStock: true, price: 14.99 }
];

function displayBooks() {

    const bookList = document.getElementById('book-list');

   // bookList.innerHTML = ''; // Eski kitapları temizle

    books.sort((a, b) => a.title.localeCompare(b.title));//Kitapları Alfabetik Sıraya Göre Sırala:

    books.forEach(book => {
    const bookDiv = document.createElement('div');//Her kitap için bir div elemanı (bookDiv) oluşturur, kitabın bilgilerini bu div'e ekler.

    bookDiv.classList.add('book'); // CSS için 'book' sınıfı ekler

    //Asagidaki fonksiyonda da bu fonksiyon tanimlanacgi icin book.title , author vb oradan aliyor

    const bookInfo = `
            <p><strong>${book.title}</strong> by ${book.author}</p>
            <p>${book.inStock ? "In Stock" : "Sold Out"}</p>
            <p>$${book.price.toFixed(2)}</p>
        `;



        bookDiv.innerHTML = bookInfo;//Book listesine artik bunlari ekler sirayla

         bookList.appendChild(bookDiv);

        

        });
    }


     document.getElementById('book-form').addEventListener('submit', function(event) {


       event.preventDefault();//Bu yöntem, formun varsayılan olarak gönderilmesini engeller.

       //Formdan kullanıcıdan alınan bilgileri toplamak için document.getElementById() ile her bir form elemanına erişilir
    
       const title = document.querySelector('#title').value;
       const author = document.querySelector('#author').value;
       const price = document.querySelector('#price').value;
       const inStock = document.querySelector('#inStock').checked;

       books.push({ title, author, inStock, price });// Yeni kitabı 'books' dizisine ekle

       document.getElementById('book-form').reset();//Kullanıcının formu doldurduktan sonra temizlenmesi için formu sıfırlamak gerekir:
     
    
       displayBooks(); // Güncellenmiş listeyi göster
    
    });

    displayBooks();
