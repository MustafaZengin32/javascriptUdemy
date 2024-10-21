const cl=document.querySelector('form');

const user=document.querySelector('#inn');

// cl.addEventListener('submit', e=> {

//     e.preventDefault();//sayfa yenilenmesin diye

//     console.log('Form Gonderildi');

//     console.log("username: "+user.value);

// });

cl.addEventListener('submit', e=> {

    e.preventDefault();//sayfa yenilenmesin diye

    console.log('Form Gonderildi');

    console.log("all username: "+cl.username.value);

});

