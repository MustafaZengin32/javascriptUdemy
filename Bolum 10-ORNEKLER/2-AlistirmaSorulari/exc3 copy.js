/*
Task 3: Number processing
Create a function processNumbers that:
Takes an array of numbers,
Does type checking on each item (only integer type numbers allowed)
doubles each nuber
filters out numbers that are less than 22
returns the sum of remaining numbers and the list of numbers that were removed.*/

const arrNumbers = [10, 15, 3, 22, 13, 8, "powercoders", 30.5, 25];

let removed=[];

let remain=[];

function processNumbers(arrNumbers){

    arrNumbers.forEach(aa=>{

        if(Number.isInteger(aa)){

            aa=aa*2;

            if(aa<22){

                removed.push(aa);
            }

            else{

                remain.push(aa);
            }
        }

})

return {
    remain,
    removed
}

}


console.log(processNumbers(arrNumbers));




