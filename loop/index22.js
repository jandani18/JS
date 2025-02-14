// example :

// breaking loops : use break to exit the loop permanturely 

    var date = 0 ;
    while(date<=10)
    {
        console.log("date is : ", date);

        if(date == 3)
        {
            break;
        }
        date++;
    } 

    //output :

//     date is :  0
//     date is :  1
//     date is :  2
//     date is :  3