const listel=document.querySelectorAll('li');


listel.forEach(tagg=>{

    tagg.addEventListener('click',a=>{

        if(a.target.tagName.toLowerCase() === 'li'){

            a.target.remove();

        }

    })
})


const but=document.querySelector('button');


    but.addEventListener('click',function(){

        const ul = document.querySelector('ul');
        const li = document.createElement('li');
        li.textContent = 'Yeni eleman';
        ul.appendChild(li);

    })




