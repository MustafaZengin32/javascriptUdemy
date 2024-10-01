let yas=29;

// let yas=60; //Bu sekilde tekrar deklere edilemez

// yas=60;  //Ancak bu sekilde degerini degistirebiliriz

if(true){

    console.log("Icerideki: "+yas);
}

console.log("Disaridaki: "+yas);

console.log("*****************************************");

let yas1=39;

if(true){

    let yas1=50; // Burada sorun vermez cunku sadece bu scope da gorunur

    console.log("Icerideki: "+yas1);
}

console.log("Disaridaki: "+yas1);

console.log("*****************************************");

let yas2=49;

if(true){

    let yas2=70; 

    console.log("Icerideki: "+yas2);

    if(true){

        let yas2=80; 
    
        console.log(" En IcerdekiIcerideki: "+yas2);
    }
}

console.log("Disaridaki: "+yas2);

console.log("*****************************************");

console.log("var ornegiiiiiiiiiiiii");

var yas3=39;

if(true){

    var yas3=50;

    console.log("Icerideki: "+yas3);
}

console.log("Disaridaki: "+yas3);

//Yukaridaki gibi var da bir istisna var , var her yerden gorunur bu sebeple ilk atama if de degistigi icin en son dista da bu degisikligi yazar yani 2 si de 50 yazar