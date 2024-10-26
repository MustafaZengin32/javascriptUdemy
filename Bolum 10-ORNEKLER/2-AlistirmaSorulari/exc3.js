/*
Task 3: Number processing
Create a function processNumbers that:
Takes an array of numbers,
Does type checking on each item (only integer type numbers allowed)
doubles each nuber
filters out numbers that are less than 22
returns the sum of remaining numbers and the list of numbers that were removed.*/

function processNumbers(numbers) {

    let removedNumbers = [];    
    let validNumbers = [];      

   
    numbers.forEach(num => {
       

        if (Number.isInteger(num)) {

            const doubled = num * 2;   
            
            if (doubled >= 22) {

                validNumbers.push(doubled); 

            } else {
                removedNumbers.push(doubled); 
            }
        } else {

            console.log(`${num} is not a valid integer, skipped.`);
          
        }
    });

   
    let sumOfValidNumbers = 0;

    for (const num of validNumbers) {

    sumOfValidNumbers += num;
    
    }

    return {

        sum: sumOfValidNumbers,
        removed: removedNumbers
    };
}


const numbers = [10, 15, 3, 22, 13, 8, "powercoders", 30.5, 25];

console.log(processNumbers(numbers));


