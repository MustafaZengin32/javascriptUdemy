/**
 * String ifadeyi hem " " icinde hem de ' ' icinde yazdirabiliriz.Onemli olan hangisi ile acti isen onla kapatmak
 */


console.log("Merhaba Dunya");

console.log('Selam');

let email="mzng3243@gmail.com";
console.log(email);

let ad="Mustafa";
let soyad="Zengin";
let adSoyad=ad+" "+soyad;

console.log(adSoyad);

/**Karakterleri cekme
 *Js bu Stringi array gibi gorur
*/

console.log(adSoyad[2]);//3.harfi getirme //Dikkat ilk harfin index i 0 //s gelir

//Kac karakter , uzunlugunu bulma , length

console.log(adSoyad.length);//14

if(adSoyad.length>0){

    console.log("Mission is completed");

}

//Methodlar

console.log(adSoyad.toUpperCase());

console.log(adSoyad);

console.log(adSoyad.toLowerCase());

let index=adSoyad.indexOf("u");
console.log(index);









