/**var let cons
 * let i update edebilirsin , ama cons sabit
 * String ile number toplanirsa sonuc String olur
 * Js hata verince durdurur ve diger kodlari okumaz
 * Yorum satiri // tekli ,kisayol ctrl k c , cikma ctrl k u
*/ 

let gun=8;
let ay=9;
let yil=1990;

console.log(gun,ay,yil);

console.log("Mustafa Zengin "+gun+"/"+ay+"/"+yil+" tarihinde dogmustur.");

gun=29;

console.log(gun);

const sifirAraba=250000;
// sifirAraba=400000; Uncaught TypeError: Assignment to constant variable

console.log(sifirAraba);
