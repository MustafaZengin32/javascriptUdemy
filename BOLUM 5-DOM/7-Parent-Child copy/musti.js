const sec=document.querySelector('section');

const secarr=sec.children;

Array.from(secarr).forEach((eleman)=>{

    eleman.classList.add('heyyo');



});

const h2p=document.querySelector('h2');


console.log(h2p.parentElement);



console.log(h2p.previousElementSibling);


console.log(h2p.nextElementSibling);






