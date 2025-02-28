//  question : 3

//  find vowels 

// write a js code that takes a string as input and counts the number of vowels in it 

//let str = 'diwarkar'

let str = 'diwarkar '

let vowelcount = 0;

const vowels = "aeiouAEIOU";

for (let i=0; i<=str.length; i++)
{
    if(vowels.includes(str[i]))
    {
        vowelcount++;
    }
}
console.log("number of vowels : " + str +""  + vowelcount);
 