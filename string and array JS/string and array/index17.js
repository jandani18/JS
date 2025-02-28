// question : 4

// sum of digits 

// write a js code to find the sum of digits of a positive number 

//let num = 123456

function sumOfDigits(num) {
    if (num === 0) return 0; 
    return (num % 10) + sumOfDigits(Math.floor(num / 10)); 
}

console.log(sumOfDigits(123456)); 

// Output: 21
