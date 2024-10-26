/*
Taks 1: Create a function that manages tasks.
The function must accept a list of classes and filter them based on the completed property and return an object with two arrays (pending, completed) with the respective items.                                           javascript ile coz ve anlat
*/

const tasks=[

    {task:"correct cv",station:false},
    {task:"make homeworks",station:true},
    {task:"go interview",station:true},
    {task:"finish bootcamp",station:true}

];


const pend=[];

const comp=[];


tasks.forEach(a=>{

    if(a.station===true){

        comp.push(a.task);
        
        return a;
    }

    else{

        pend.push(a.task);

        return a;
    }
}



);

console.log("It is completed tasks: "+comp);


console.log("It is pending tasks: "+pend);
