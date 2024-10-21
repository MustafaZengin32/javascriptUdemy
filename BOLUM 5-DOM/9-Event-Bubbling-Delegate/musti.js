const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log('tiklandi');
});

const items = document.querySelectorAll('li');

// items.forEach(item => {
//     item.addEventListener('click', e => {
//         console.log(e);
//         console.log(e.target);//tiklanan elemani gosterir
//         e.target.style.backgroundColor = 'blue';
//         console.log('item tiklandi');
//     });
// });



items.forEach(item => {
    item.addEventListener('click', e => {
        if(e.target.tagName.toLowerCase() === 'li') {
            e.target.remove();
        }
    });
});


const ek = document.querySelector('button');

ek.addEventListener('click', function() {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.textContent = 'Yeni eleman';
    ul.appendChild(li);


    li.addEventListener('click', e => {
        if(e.target.tagName.toLowerCase() === 'li') {
            e.target.remove();
        }
    });
});










