// write a function called arrayFromRange(min, max)
// when u print a variable with the 2 parameters in there
// we have to see in console a print from the number min value
// to the biggest one

// EXAMPLE
// const numbers = arrayFromRange(-1,5)
// output: -1, 1, 2, 3, 4, 5

function arrayFromRange(min, max){
    for (let i = min; i <= max; i++) {
        console.log(i)
    }
}

const numbers = arrayFromRange(1, 22);

// ========================================= //
    // here is the Mosh Way
// he suggested to store the results in an array inside the for cycle
    // let's try it

function arrayFromRange02(min, max){
    const output = [];
    for (let i = min; i <= max; i++)
        output.push(i);
    return output
}

const numbers02 = arrayFromRange02(-5, 7);
console.log(numbers02);