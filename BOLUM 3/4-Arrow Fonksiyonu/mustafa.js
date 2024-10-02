const kareAlani=(kenar)=>{

    let alan=kenar**2;

    return alan;


}

console.log(kareAlani(4));

const can=()=>{

    return 'Alis'
}

console.log(can());


const cem=()=>{


}

const fatura=function(urunler,vergi){

    let sum=0;

    for(let i=0;i<urunler.length;i++){

        sum=sum+urunler[i]+urunler[i]*vergi;

    }

    return sum;


}

console.log(fatura([20,30,40],0.25));

const fatura1=(urunler,vergi)=>{

    let sum=0;

    for(let i=0;i<urunler.length;i++){

        sum=sum+urunler[i]+urunler[i]*vergi;

    }

    return sum;


}

console.log(fatura1([20,30,40],0.25));





