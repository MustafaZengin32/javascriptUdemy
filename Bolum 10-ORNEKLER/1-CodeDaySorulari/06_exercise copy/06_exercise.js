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

const dayday=[1,3,5];

let newWeek=[];

function weekNumbersToWords(dayday){


    dayday.forEach(aa=>{

        switch(aa){

            case 1:
            return newWeek.push('Monday');
            case 2:
            return newWeek.push('Tuesday');
            case 3:
            return newWeek.push('Wednesday');
            case 4:
            return newWeek.push('Thursday');
            case 5:
            return newWeek.push('Friday');
            case 6:
            return newWeek.push('Saturday');
            case 7:
            return newWeek.push('Sunday');
            default:
            return "Bu deger yazilmadi"
        }
    })

}

weekNumbersToWords(dayday);

console.log(newWeek);