const ulum=document.querySelector('.main'); //Burada ilgili documan da ilgili class i query ile icine .classname yazarak bulabiliriz

let=ogrencilerim=['can','hakan','elif','tuba'];

let htmlim=``;

ogrencilerim.forEach(function ogrenci(kisi){

    htmlim=htmlim+`<li>${kisi}</li>`

}
    );


    console.log(htmlim);

    ulum.innerHTML=htmlim;



