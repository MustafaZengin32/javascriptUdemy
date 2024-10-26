const hata1= document.querySelector('p');//Bu sekilde p etiketinin hepsini secmez sadece ilk p yi secer
console.log(hata1);// <p>Musti</p>

const hata2= document.querySelector('.error');
console.log(hata2);// <p class="error">Hops</p>

const hata3= document.querySelector('div.error');
console.log(hata3);//    <div class="error">Dikkat Et</div>    

const hata4= document.querySelectorAll('p');
console.log(hata4);//Bu sekilde bir list gorunur

console.log(hata4[0]);//Bu sekilde ilk p etiketini secmis oluruz

console.log(hata4[1]);//Bu sekilde ikinci p etiketini secmis oluruz

console.log(hata4[2]);//Bu sekilde ucuncu p etiketini secmis oluruz

hata4.forEach(element => {
    console.log(element);
});







