let yaricap=15;
const piSayisi=3.14;

console.log(yaricap,piSayisi);//15 3.14

let daireAlani=piSayisi*Math.pow(yaricap,2);//yaricap**2 de olur
console.log(daireAlani);//706.5

console.log(16/4);//4

console.log(yaricap%4);//3

let sonuc=6*(15-4)**2;
console.log(sonuc);//726

let sayi=13;
sayi=sayi+1;
sayi++;
sayi+=1;

console.log(sayi);

//NaN Not a Number //Hata Degil sadece boyle bir ifade akis devam eder * / number ve string ile yaparsan verir

console.log(15/"Musti");

console.log("Dersi "+sayi+" Defa tekrar ettim");

let userInput=prompt("Please enter a number");//js bunu string ya da nulll olarak algilar

console.log(typeof userInput);

if(typeof userInput==="number"){

    console.log("I am happy");

}

else{
    console.log("bad");
}

console.log(userInput);

let new1=Number(userInput);

console.log(typeof new1);










