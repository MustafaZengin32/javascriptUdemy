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

const arr1=["Monday", "Thursday", "Saturday", "Wednesday", "Tuesday"];

function getLastValue(arr1){

   arr1.sort((a, b) =>
        a.localeCompare(b, undefined, { sensitivity: "base" }));

    console.log(arr1);

    const lgt=arr1.length-1;

    return arr1[lgt]

}


const result=getLastValue(arr1);

console.log(result);
