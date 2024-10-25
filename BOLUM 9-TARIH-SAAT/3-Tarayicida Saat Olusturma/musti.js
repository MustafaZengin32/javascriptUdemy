const clock=document.querySelector('.clock');

const tick=()=>{

    const now=new Date();

    const hours=now.getHours();

    const minutes=now.getMinutes();

    const seconds=now.getSeconds();

    console.log(hours,minutes,seconds);

    const html=

    `
    <span>${hours}</span>:
    <span>${minutes}</span>:
    <span>${seconds}</span>
    `

    clock.innerHTML=html;

};

//setInterval surekli cagirma islevini yapar

setInterval(tick,1000);//1000 ms -->1 sn yani her sn cagiracagim




