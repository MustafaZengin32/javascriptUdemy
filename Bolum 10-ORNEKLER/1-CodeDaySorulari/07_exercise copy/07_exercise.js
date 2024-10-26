// # Task: Reverse the Digits of a Number

// Write a function that takes a number as input and returns the number with its digits reversed.

// ## Examples

// Input: 1234 <br>
// Output: 4321 <br> <br>

// Input: 100000000 <br>
// Output: 1 <br> <br>

// Input: -321 <br>
// Output: -123

// ---

// Estimated time: 15 minutes <br>
// **Total points: 15**


let inputNbr=-1234;

function reverseNumber(inputNbr){



    let outputNbr=Math.abs(inputNbr).toString().split('').reverse().join('');


    return inputNbr<0 ? -Number(outputNbr) : Number(outputNbr);

}

const result=reverseNumber(inputNbr);

console.log(result);
