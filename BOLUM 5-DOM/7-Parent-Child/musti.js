const sec=document.querySelector('section');

console.log(sec.children);

const chl=sec.children;

Array.from(chl).forEach(element => {

    element.classList.add('sec-suc');

});



Array.from(chl).forEach(element => {

    element.textContent+=" Success"
});

const ha=document.querySelector('h2');

console.log(ha.parentElement);

console.log(ha.previousElementSibling);

console.log(ha.nextElementSibling);





