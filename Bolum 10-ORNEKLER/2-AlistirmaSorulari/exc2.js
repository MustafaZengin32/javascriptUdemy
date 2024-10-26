/*
Task 2: Guess a number program
Create a program that picks a random number and let the user with the guessNumber function guess the number.
The function must:
validate the input type
Track the number of guesses,
return +1 when the number is higher
return -1 when the number is smaller
return 0 when the number is correct
*/


const random = Math.floor(Math.random() * 10);

function guessNumber(number) {
    let counter = 0;

    while (number !== random) {
      

        if (typeof number !== "number" || isNaN(number)) {
            return "enter valid number";
        }

        counter++;

        if (number > random) {

            console.log("it is high! try again.");
            return +1;

        } else if (number < random) {

            console.log("it is low! try again.");
            return -1;
        }
    }

    console.log(`Congrats after ${counter} times you found the number!`);

    return 0;
}



let userInput = prompt("gueess the number between 0-10");

while (true) {

    const numberInput = Number(userInput);

    if (isNaN(numberInput)) {

        console.log("please enter a valid number");

    } else {

        const result = guessNumber(numberInput);
        
        if (result === 0) break; 
    }

    
    userInput = prompt("please try again");
}
