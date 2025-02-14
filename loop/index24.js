// example :

//continue statments : use continue to skip the cuurent iteration and move to the next one 

var guest = 0;
while(guest <= 10)
{
    console.log("guest",guest);
    if(guest == 3)
    {
        continue;
    }
    guest++;
}

//output:
