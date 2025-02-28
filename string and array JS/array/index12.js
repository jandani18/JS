// example:12  Print the first 3 items in the array using a loop


var movies = ["bahuballi", "Spider Man", "Iron Man", "Super Man"];
for (var i = 0; i < movies.length; i++) {
    if (i == 3) {
        break;
    }
    console.log(movies[i]);
}

// output:
// bahuballi
// Spider Man
// Iron Man