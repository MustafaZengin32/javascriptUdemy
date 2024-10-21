//Xml request

//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

const getTodos=(resource,callback) => {

const request = new XMLHttpRequest();

request.open('GET', resource);//request acti

request.send();//request gonderildi

request.addEventListener('readystatechange', () => {
    console.log(request, request.readyState);

    if(request.status === 200) {

        const data=JSON.parse(request.responseText);

       
        callback(undefined, data);
    }

    else{

        // console.log('Bir hata olustu', request.status);
        callback("Bir hata olustu", undefined);
    }
});

};

getTodos('example/can.json',(err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});
