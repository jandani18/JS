// example : 3

//  accesing information in arrays vs objects 

// array :

    // var name = ["janvi","kinal","shruu"]
    // console.log(name[2]);

    // output : shruu

//object :

    var shruu = 
    {
        name:"shruu",
        age:23,
        city:"surat",
        marks:[20,30,40]
    }

    console.log(shruu["city"]);
    // output:surat

    console.log(shruu["marks"][0]);
    // output:20

    console.log(shruu.city);
    // output:surat


    console.log(shruu.marks.length);
    // output:3

