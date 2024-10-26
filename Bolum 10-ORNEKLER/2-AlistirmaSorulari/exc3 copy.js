/*
Task 3: Number processing
Create a function processNumbers that:
Takes an array of numbers,
Does type checking on each item (only integer type numbers allowed)
doubles each nuber
filters out numbers that are less than 22
returns the sum of remaining numbers and the list of numbers that were removed.*/

const arr1=[5,6,10,15,20];

function processNumbers(arr1){

    let remain=[];

    let removed=[];


    for(let i=0;i<arr1.length;i++){


        if(Number.isInteger(arr1[i])){

            arr1[i]=arr1[i]*2;

            if(arr1[i]>22){

                remain.push(arr1[i]);
            }

            else{

                removed.push(arr1[i]);
            }

        }
    }

    return { remain, removed };

   
}

const result=processNumbers(arr1);

console.log("remain "+result.remain);

console.log("removed "+result.removed);