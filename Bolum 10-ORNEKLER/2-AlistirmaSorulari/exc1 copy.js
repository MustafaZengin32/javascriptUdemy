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



function filterTask(tasks){

let pending=[];

let completed=[];


    tasks.forEach(aa=>{

        if(aa.station===true){

            completed.push(aa);
        }

        else{

            pending.push(aa);
        }

    }
    )

    return{

            completed,
    
            pending
        }

    
}

const result=filterTask(tasks);

console.log(result);