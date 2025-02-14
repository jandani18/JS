// que : 7 print pattern 
// *
// **
// ***
// ****
// *****
function pattern(print)
{
    for(let i=1; i<=print; i++)
    {
        console.log("*".repeat(i));
    }
}
pattern(5);

// output:
// *
// **   
// ***  
// **** 
// *****