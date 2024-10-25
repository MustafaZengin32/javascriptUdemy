const notlar=[15,45,32,0,100,90,7];

for(let i=0;i<notlar.length;i++){

    console.log(notlar[i]);

    if(notlar[i]===100){

        console.log("Brovoooooooo en yuksek not");

        break;

    }

}

//Yukarida if kosulu olunca break ile tum donguden cikar sadece if den degil 
//Ben break i for bitmeden yazsa idim ilk kontrolu yapip direk cikardi

console.log("************************************************************");


const notlar1=[15,45,32,0,100,90,7];

for(let i=0;i<notlar1.length;i++){

    if(notlar[i]===32){

        continue;
    }

    console.log(notlar1[i]);

}

//Burada if icinde eger eleman 32 ye esit ise gormezden gelden yokmus gibi davran sonraki satirlara gec anlaminda continue kullandik




