const pdegeriilk=document.querySelector('p');

pdegeriilk.innerText='Mustafa Cok Iyi Bir Tester';

const phepsi=document.querySelectorAll('p');

phepsi.forEach((deg)=>{

    deg.innerText+=' yeni alanlar ogrenir';

});

const context=document.querySelector('div.icerik');

const ogrenciler=['can','ali','gamze'];

ogrenciler.forEach((ogek)=>{

    context.innerHTML+=`<p>${ogek}</p>`;

}


);