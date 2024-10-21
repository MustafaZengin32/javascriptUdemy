//String Dizi

let isimler=['can','ridvan','elif'];

console.log(isimler[1]);

//const olsa idi degistiremezdim ama let de bunu yapabilirim

isimler[1]='cansu';

console.log(isimler[1]);


//Number Dizi

let yaslar=[3,18,25,50];

console.log(yaslar[3]);

//Karmasik Diziler var ama cok kullanilmaz efektif degil

let rast=['can','han',3,4];

console.log(rast);

console.log(rast.length);

//join i , her elemanin arasina bir ifade koymak ister isek kullaniriz

let dash=isimler.join('-');

console.log(dash);

let comma=isimler.join(',');

console.log(comma);

let sira=isimler.indexOf('cansu');

console.log(sira);

//concat ekleme yapmak icin kullanilir //birden fazla eleman eklenebilir sona ekler

let ekle=isimler.concat(['merve','askin']);//concat kalici olarak degistirmez

console.log(ekle);

//push diziye eleman ekleme icin kullanilir //push diziyi kalici olarak degistirir

let elemanekle=isimler.push('leyla');

console.log(isimler);

isimler.push('haci');

console.log(isimler);

isimler.pop();//pop methodu son ekledigin elemani siler


console.log(isimler);





