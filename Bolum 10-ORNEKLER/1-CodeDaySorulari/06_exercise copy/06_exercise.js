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



function aa(dayday){

return dayday.map(element=>{


    switch(element){

        case 1:

        return dayday[dayday.indexOf(1)]='Pazartesi'

        case 2:

        return  dayday[dayday.indexOf(2)]='Sali'

        case 3:

        return dayday[dayday.indexOf(3)]='Carsamba'

        case 4:

        return dayday[dayday.indexOf(4)]='Persembe'

        case 5:

        return dayday[dayday.indexOf(5)]='Cuma'


        case 6:

        return dayday[dayday.indexOf(6)]='Cumartesi'
        case 7:

        return dayday[dayday.indexOf(7)]='Pazar'

        default:

        return 'It is not a number'

    }
}

)
}


const result=aa(dayday);

console.log(result);