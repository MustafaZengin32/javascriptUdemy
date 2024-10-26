
let ogrencilerim=['can','hakan','elif','tuba'];

const ulum=document.querySelector('.main');

let htmlim=``;


ogrencilerim.forEach((kisiler)=>{

    htmlim+=`<li>${kisiler}</li>`;

}
);

ulum.innerHTML=htmlim;


