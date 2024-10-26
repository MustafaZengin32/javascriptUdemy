/*

p icinde icerik olarak error geciyor ise class ini error , succes geciyorsa class ini success yap

*/


const parag=document.querySelectorAll('p');

parag.forEach((eleman)=>{

    if(eleman.textContent.includes('success')){

       eleman.setAttribute('class','success');

    }

    else if(eleman.textContent.includes('error')){

        eleman.setAttribute('class','error');


    }

    else{

        console.log('Hicbiri Gecmiyor Islem Yapilmadi');
    }



}



);
