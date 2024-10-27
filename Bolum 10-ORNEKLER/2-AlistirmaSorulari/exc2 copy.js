const random=Math.floor(Math.random()*10);

function guessNumber(number){


    if(number>random){

        return +1;

    }

    else if(number<random){

        return -1;

    }

    else{

        return 0;
    }

}



do{

    const number=Number(prompt("Please Enter You Number: "));
    
    
    
    const result=guessNumber(number);

    if(!isNaN(number)){

        if(result===(+1)){

            console.log("High");
            
                console.log("Try AGAIN");

        }

        else if(result===(-1)){


            console.log("Low");
            
             console.log("Try AGAIN");
        }

        else{

            console.log("Correct");

            console.log(random +" ile "+number+" esittir kazandin");

            break;
        }


    }


}while(true);

