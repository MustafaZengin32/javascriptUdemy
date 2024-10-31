/*
# Task: Convert Weekday Numbers to Names

Write a function called _weekNumbersToWords_ that takes an input array of numbers (from 1 to 7), and returns an array where each number is converted to the corresponding weekday name.

You must use a **switch** statement, not if/else, to perform the conversions.

### Example

**Input:** [1,4,6,3,2]<br>
**Output:** ["Monday", "Thursday", "Saturday", "Wednesday", "Tuesday"]

---

Estimated time: 30 minutes<br>
**Total points: 30**
*/

arr1=[];

function aa(input){

 

    return input.map(aa=>{

        switch(aa){

            case 1:
            return arr1.push('Monday');
            case 2:
            return arr1.push('Tue');
            case 3:
            return arr1.push('Wed');    
            case 4:
            return arr1.push('Thur');
            case 5:
            return arr1.push('Friday');
            case 6:
            return arr1.push('Sat');
            case 7:
            return arr1.push('Son');
            default:
            return 'Please enter number that is between 1-7'

        }

        
    })

}



const input = [1, 4, 6, 3, 2];

aa(input);

console.log(arr1);
