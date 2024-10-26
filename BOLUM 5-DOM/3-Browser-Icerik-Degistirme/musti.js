const pdegeri=document.querySelector('p');

console.log(pdegeri);

pdegeri.innerText='Mustafa bir Tester';//text e erisir

const pdegerleri=document.querySelectorAll('p');

pdegerleri.forEach(a => {
    console.log(a.innerText);
    a.innerText+=' yeni alan';
});

const icerik=document.querySelector('div.icerik');

console.log(icerik);

//innertext de sadece yazilari gunceller , ama innerhtml de html taglarini da gunceller

icerik.innerHTML='<h2>Selenium,Appium,Api,Postgresql</h2>';

icerik.innerHTML+='<h2> : is the Best Tools</h2>';

const ogrenciler=['can','musti','ali','veli'];


ogrenciler.forEach(ogrenci => {
    icerik.innerHTML+=`<p>${ogrenci}</p>`;
});




