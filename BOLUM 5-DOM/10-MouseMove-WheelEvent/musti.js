const ms=document.querySelector('.kutu');

ms.addEventListener('mousemove', function(e) {
    ms.textContent=`Mouse X: ${e.offsetX} Mouse Y: ${e.offsetY}`;
    ms.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},40)`;
});

document.body.addEventListener('wheel', (e) => {
    console.log(e.pageX, e.pageY);
});

