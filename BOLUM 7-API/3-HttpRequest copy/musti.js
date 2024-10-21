//Xml request

//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState



const request = new XMLHttpRequest();

request.open('GET', 'https://jsonplaceholder.typicode.com/todos');//request acti

request.send();//request gonderildi

request.addEventListener('readystatechange', () => {
    console.log(request, request.readyState);
    if(request.readyState === 4 && request.status === 200) {
        console.log(request.responseText);
    }
});


