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


const random=Math.floor(Math.random()*10);

function guessNumber(userGuess){

    if(userGuess > random){

        return +1
    }

    else if(userGuess < random){

        return -1;

    }

    else{

        return  0;
    }

}

let userGuess;

do{

    userGuess = Number(prompt('enter guess number in order to find random : '));

    let equality = guessNumber(userGuess);


    if(equality===(+1)){

        console.log('High');

    }

    else if(equality===(-1)){

        console.log('Low');

    }

    else{

        console.log('found it');
        console.log("random number was : "+random);
        break;
    }



    }while(true);




