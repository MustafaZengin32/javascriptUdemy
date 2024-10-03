let ogrenci={

    ad:'Musti',

    yas:29,

    email:'mzng@gmail.com',

    sinif:12,

    dersler:['math','fizik','kimya']

};

console.log(ogrenci);//Tum object yazdirilir

console.log(ogrenci.yas);//29

console.log(ogrenci['email']);//Bu sekildede yazdirilabilir ancak ustteki daha kullanisli

ogrenci.yas=20;//Bu sekilde update edilebilir

console.log(ogrenci.yas);//20

console.log(ogrenci['sinif']);

ogrenci['sinif']=13;

console.log(ogrenci['sinif']);

console.log(typeof ogrenci);//object

console.log(typeof ogrenci.sinif);//number






