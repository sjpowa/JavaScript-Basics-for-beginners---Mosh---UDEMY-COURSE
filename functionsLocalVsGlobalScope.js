const color = 'red'; // GLOBAL VARIABLE

function ciao() {   // GLOBAL FUNCTION
    const color = 'blue'; // LOCAL VARIABLE
    // const hello = 'ciao';
    console.log(color);
}

console.log(hello); // we cant access to a local variable
                    // outside its scope

console.log(color);
ciao(); // output of color will be: blue

for (let i = 0; i < 10; i++) { // i IS A LOCAL VARIABLE
    console.log(i);    
}

console.log(i); // we cant print a local variable
                // holy sh*t dude..