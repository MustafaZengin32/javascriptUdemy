function reverseDigits(num) {
   
    let reversedStr = Math.abs(num).toString().split('').reverse().join('');

  
    return num < 0 ? -Number(reversedStr) : Number(reversedStr);
}


console.log(reverseDigits(1234));  

console.log(reverseDigits(100000000));  

console.log(reverseDigits(-321)); 


