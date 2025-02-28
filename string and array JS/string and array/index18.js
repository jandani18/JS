// question : 5

// array operators

//given an array of numbers , write a js code to find the maximumnum , and minimum , and avreage values 

// let runs =[22,33,2,7,99,54]

let runs = [22, 33, 2, 7, 99, 54];

let max = runs[0]; 
let min = runs[0];
let sum = 0; 

for (let i = 0; i < runs.length; i++) {
    if (runs[i] > max) max = runs[i]; 
    if (runs[i] < min) min = runs[i]; 
    sum += runs[i]; 
}

let avg = sum / runs.length; 

console.log("maximumm no:", max);
console.log("minimumm no:", min);
console.log("average no:", avg);

//output:
// maximumm no: 99
// minimumm no: 2
// average no: 36.166666666666664