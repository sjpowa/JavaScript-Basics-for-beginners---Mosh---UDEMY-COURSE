// WHAT IS HOISTING?!?

// when we write a function
// it can be recalled also before of it
// becasue when u run the compiler
// js will put all the function on the top
// so
// this is HOISTING

// U CAN'T DO IT WITH VARIABLES
// EXAMPLES DOWN HERE

fx01(); // so i can recal the function here and we will have its output in console

function fx01() {
    console.log('hello');
}

// ====================================
// WE CANT DO THE SAME FOR VARIABLES

console.log(x); // error in console
let x = 4;

fx02(); // error in console
const fx02 = function ciao() {
    console.log('ciao');
}