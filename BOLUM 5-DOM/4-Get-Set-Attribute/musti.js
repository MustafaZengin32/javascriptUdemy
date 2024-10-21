const link=document.querySelector('a');
console.log(link.getAttribute('href'));

link.setAttribute('href','https://www.canboz.com/');

link.textContent='Boz Training';

console.log(link.getAttribute('href'));

const pDegeri=document.querySelector('p');
console.log(pDegeri.getAttribute('class'));

pDegeri.setAttribute('class','success');

pDegeri.textContent='Basarili';
console.log(pDegeri.textContent);

pDegeri.setAttribute('style', 'color: green; font-weight: bold;');

