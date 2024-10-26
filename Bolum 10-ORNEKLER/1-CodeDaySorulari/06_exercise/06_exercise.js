function weekNumbersToWords(numbers) {
    return numbers.map(num => {
        switch (num) {
            case 1:
                return "Monday";
            case 2:
                return "Tuesday";
            case 3:
                return "Wednesday";
            case 4:
                return "Thursday";
            case 5:
                return "Friday";
            case 6:
                return "Saturday";
            case 7:
                return "Sunday";
            default:
                return "Invalid number"; 
        }
    });
}


const input = [1, 4, 6, 3, 2];



const output = weekNumbersToWords(input);

console.log(output);
