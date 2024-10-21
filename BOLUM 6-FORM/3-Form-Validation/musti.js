const un=document.querySelector('#inn');

const pattern=/^[a-z]{6,10}$/; 

const form=document.querySelector('.signUpForm');

form.addEventListener('submit',function(e){
    e.preventDefault();
    if(pattern.test(form.value)){
        form.style.backgroundColor='green';
    }   
    else{
        form.style.backgroundColor='red';
    }
});




// un.addEventListener('keyup',function(e){

//     if(pattern.test(un.value)){
//         un.style.backgroundColor='green';
//     }   
//     else{
//         un.style.backgroundColor='red';
//     }
// }    
// );



