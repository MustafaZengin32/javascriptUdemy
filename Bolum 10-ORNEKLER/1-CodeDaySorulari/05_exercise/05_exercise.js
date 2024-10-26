function _getLastValue(arr) {
   

    arr.sort();
    
   
    return arr[arr.length - 1];
}


const input = ["Monday", "Thursday", "Saturday", "Wednesday", "Tuesday"];

const output = _getLastValue(input);

console.log(output); 
