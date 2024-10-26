const baslik=document.getElementById('musti');

const hatalar=document.getElementsByClassName('error');

//html collection ile foreach calismaz bu sebeple array e cevirmemiz gerekiyor

console.log(hatalar[0]);
console.log(hatalar[1]);

const paragraflar = document.getElementsByTagName('p');


// HTMLCollection does not have a forEach method, so we need to convert it to an array
Array.from(paragraflar).forEach(element => {
    console.log(element);
});

// querySelectorAll returns a NodeList, which is similar to an array, but it does not have a forEach method

console.log(paragraflar[0]);

