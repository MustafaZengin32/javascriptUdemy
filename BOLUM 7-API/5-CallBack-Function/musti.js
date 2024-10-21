//Xml request

//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

const getTodos=(callback) => {

const request = new XMLHttpRequest();

request.open('GET', 'https://jsonplaceholder.typicode.com/todos');//request acti

request.send();//request gonderildi

request.addEventListener('readystatechange', () => {
    console.log(request, request.readyState);

    if(request.status === 200) {
       
        callback(undefined, request.responseText);
    }

    else{

        // console.log('Bir hata olustu', request.status);
        callback("Bir hata olustu", undefined);
    }
});

};

getTodos(
    (err,data) => {
        if(err) {
            console.log(err);
        }

        else{
            console.log(data);
        }
    }
);
