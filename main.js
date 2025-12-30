
// find out the maximum numbers; 

// By using the formula;
let arr = [1,3,4,5]; 
let n = 5; 

let expectedSum = (n * (n+1)) / 2; 
let actualSum = arr.reduce((acc,curr) => acc + curr,0);

let missingNumber = expectedSum - actualSum;

console.log('The missing number is: ',missingNumber);
