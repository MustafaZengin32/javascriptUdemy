//tipini js arka planda anlar ve cevirir ama siz tipi ile birlikte kontrol etmek ister iseniz === kullanmaniz gerekir == degil

let yas=29;

console.log(yas==29);//true

console.log(yas=='29');//true

console.log(yas===29);//true

console.log(yas==='29');//false

console.log(yas!=29);//false

console.log(yas!='29');//false

console.log(yas!==29);//false

console.log(yas!=='29');//true

console.log('********************************************');

let age="29";

console.log(age+1);//291

console.log(typeof age);//string

//tip donusumu

yas=Number(yas);//type conversion

console.log(yas+1);//30

let son='Cem';

console.log(Number(son));//NaN

let don=String(18);

console.log(don+1);//181

let kon=Boolean(18);//0 haric her sayi hepsi true doner  , 0 false doner

console.log(kon);

let con=Boolean('cagri');//sadece ici bos string false doner

console.log(con);

let han=Boolean('');

console.log(han);//false






















