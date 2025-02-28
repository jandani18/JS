// question : 6

// write a js function to check whether a given number is prime or not 

function isPrime(num) {
    if (num < 2) return false; 

    for (let i = 2; i < num; i++) 
    { 
        if (num % i === 0) {
            return false; 
        }
    }

    return true; 
}
console.log(isPrime(3));  //true
console.log(isPrime(7));  //true
console.log(isPrime(10)); //false 
console.log(isPrime(2));  //true
