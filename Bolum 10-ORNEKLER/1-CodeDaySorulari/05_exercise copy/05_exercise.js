/*
# Task: Get the Last Alphabetical Element

Write a JavaScript function called _getLastValue_ that takes an array of strings as input.

The function should:

Sort the array of strings alphabetically.
Return the last element of the sorted array.

### Example:

**Input:** ["Monday", "Thursday", "Saturday", "Wednesday", "Tuesday"]<br>
**Output:** "Wednesday"<br>

---

Estimated time: 15 minutes <br>
Total points: 15
*/

function getLastValue(arr1){

    arr1.sort();

    return arr1[arr1.length-1];



}

arr1=["Monday", "Thursday", "Saturday", "Wednesday", "Tuesday"];

console.log(getLastValue(arr1));



