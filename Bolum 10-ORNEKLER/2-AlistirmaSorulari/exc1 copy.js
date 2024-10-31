/*
Taks 1: Create a function that manages tasks.
The function must accept a list of classes and filter them based on the completed property and return an object with two arrays (pending, completed) with the respective items.                 

*/


const tasks=[

    {task:"correct cv",station:false},
    {task:"make homeworks",station:true},
    {task:"go interview",station:true},
    {task:"finish bootcamp",station:true}

];

let pending=[];

let completed=[];

function aa (tasks){

    tasks.forEach(xx=>{

        if(xx.station===true){

            return completed.push(xx)

        }
        else{

            return pending.push(xx);
        }
    })

    return{
        completed,
        pending
    }
}


console.log(aa(tasks));
