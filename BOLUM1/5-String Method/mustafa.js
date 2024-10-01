let adSoyad="Ali Mustafa Zengin";

let son=adSoyad.lastIndexOf('n');//verilen index i sondan baslayarak kontrol eder karsisina gelen ilkinin bastan index ini verir

console.log(son);//17

console.log(adSoyad.lastIndexOf('a'));//10

let al=adSoyad.slice(4,7);//ilkini alir sonuncusunu almaz , 7-4=3 karakter almali ordan kontrol et
console.log(al);//Mus

let sub=adSoyad.substr(4,7);//ilk sayi nerden basladigi , digeri ise toplam kac harf alacigi
console.log(sub);//Mustafa //harflerin adedini say index degil 7 icin

let yerDegistir=adSoyad.replace('M','W');
console.log(yerDegistir);








