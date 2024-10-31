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

let num=-1234;


function rev(num){

    let rvs=Math.abs(num).toString().split('').reverse().join('');

    return reversedNum = num < 0 ? -Number(rvs) : Number(rvs);


}


console.log(rev(num));





