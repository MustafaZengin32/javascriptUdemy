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


// let number=2345;

// const rev=number.toString().split('').reverse().join('');

// console.log(rev);

let number=-1234;

function revrev(number){

    const rev=Math.abs(number).toString().split('').reverse().join('');

    return number<0 ? -Number(rev): Number(rev)
}


const result=revrev(number);

console.log(result);


