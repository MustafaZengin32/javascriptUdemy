let=ogrencilerim=['can','hakan','elif','tuba'];

ogrencilerim.forEach(function(){

console.log('Selam');//4 Selam

} 

);



ogrencilerim.forEach(function(kisi){

    console.log(kisi);//can hakan elif tuba
    
    }
    
    );

ogrencilerim.forEach(function(kisi,index){

    console.log(kisi,index);//can 0 , hakan 1 , elif 2 , tuba 3
        
        }
        
        );
    
const a=(kisi,index)=>{

    console.log(`${kisi}-${index}`);//can-0 , hakan -1 , elif -2 , tuba -3


}

ogrencilerim.forEach(a);


