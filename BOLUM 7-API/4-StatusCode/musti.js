//Xml request

//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState



const request = new XMLHttpRequest();

request.open('GET', 'https://jsonplaceholder.typicode.com/todosss');//request acti

request.send();//request gonderildi

request.addEventListener('readystatechange', () => {
    console.log(request, request.readyState);
    if(request.status === 200) {
        console.log(request.responseText);
    }

    else{
        console.log('Bir hata olustu', request.status);
    }
});


