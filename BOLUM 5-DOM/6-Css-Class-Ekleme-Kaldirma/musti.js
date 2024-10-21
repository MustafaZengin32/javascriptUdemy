const deg=document.querySelector('p');

console.log(deg.getAttribute('class'));

console.log(deg.classList);

console.log(deg.classList[1]);

deg.classList.add('hii');

console.log(deg.classList);

deg.classList.remove('test');

console.log(deg.classList);


const pp=document.querySelectorAll('p');

pp.forEach(element => {
    if(element.textContent.includes('error')){
        element.classList.add('error');
    }
    if(element.textContent.includes('success')){
        element.classList.add('success');
    }
});



