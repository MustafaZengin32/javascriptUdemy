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


function control(inputNumber){

    if(inputNumber>random){
        return 1;
    }

    else if(inputNumber<random){

        return -1;

    }

    else{

        return 0;
    }

}

const random=Math.floor(Math.random()*10);

let deneme=0;

do{

    
    const inputNumber=Number(prompt("Please enter a number : ")); 

    deneme++;


   

    if(isNaN(inputNumber)){

        console.log("Please enter a valid number again");

        continue;



    }

    else{

        const result=control(inputNumber);

        if(result===0){
            console.log("Congrats" +` ${deneme} sonunda buldun`);

         

            break;
        }

        else if(result===1){

            console.log("Higher");

        }

        else{

            console.log("Low");

        }

    }

}while(true);

