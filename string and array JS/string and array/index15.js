// question : 2

//  check pallindrome 

//write a js code to check if a given string is pallindrome or not 
// let str = 'racecar' 

function isPalindrome(str) {
    
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

let str = 'racecar';
if (isPalindrome(str)) {
    console.log(str + " is a palindrome.");
} else {
    console.log(str + " is not a palindrome.");
}

//output :

// racecar is a palindrome.