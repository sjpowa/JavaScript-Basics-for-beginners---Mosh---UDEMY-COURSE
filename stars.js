// You have a function and when u pass in it a number
// it will print in console stars per line, stars = rows
// if u have 2, u have 2 lines, the first line has a star and the second one has 2 stars
// YOU GOT THE POINT, I HOPE


// REMEMBER IN CASE U DONT
// function => keyword to have a function
// showStars => is the NAME of the function
// rows = is the NAME of the PARAMETER we have in this function called showStars

function showStars(rows) {
for (let i = 1; i <= rows; i++) {                 // for cycle that starts from 1 and it has to be <= than the value u will pass through the function to start to print something
    let pattern = 'Row nr: ' + i + ' | Stars: ';  // we declare a variable called Pattern to print a space, we need this to remove the undefined print before the * print
    for (let j = 0; j < i; j++)                   // we do a nested cycle, so a for in another for cycle, we start this from 0 
            pattern += '*';                       // at every cycle we add a star to the previous one
        console.log(pattern)                      // we print the stars
    }
}

console.log(showStars(10));                        // pass a number in the function and check if everything is good in the console