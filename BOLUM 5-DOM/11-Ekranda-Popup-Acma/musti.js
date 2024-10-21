const btn=document.querySelector('button');

const mn=document.querySelector('.main-popup');

btn.addEventListener('click', () => {

	mn.style.display='block';

});

const close=document.querySelector('.popup-close');

close.addEventListener('click', () => {

    mn.style.display='none';

});