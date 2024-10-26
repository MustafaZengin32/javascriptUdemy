/*
Taks 1: Create a function that manages tasks.
The function must accept a list of classes and filter them based on the completed property and return an object with two arrays (pending, completed) with the respective items.                                           javascript ile coz ve anlat
*/

function manageTasks(tasks) {

    let pending1 = [];

    let completed1 = [];

    for (let i = 0; i < tasks.length; i++) {

        if (tasks[i].completed) {

        completed1.push(tasks[i]);

        } 
        else {

        pending1.push(tasks[i]);
        
    }
    }
    return { pending, completed };
    }

    const tasks = [
        { id: 1, name: "Good Prepare Technical Interview", completed: false },
        { id: 2, name: "Make homework On Time", completed: true },
        { id: 3, name: "Correct Cv", completed: true },
        { id: 4, name: "Learn React", completed: false }
    ];

    console.log(manageTasks(tasks));

    
