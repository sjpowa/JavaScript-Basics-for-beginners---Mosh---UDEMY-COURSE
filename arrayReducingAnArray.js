
const numbers = [1,-2,3,4,5];

// SUM ALL THE ELEMENTS OF THIS ARRAY
let sum = 0;
for (let i of numbers)
    sum += i;

console.log(sum);

// ======================================================= //
                // FIRST WAY REDUCE() METHOD
// NOW DO THA SAME THING BUT WITH THE reduce() METHOD
// legend //
// a = accumulator | c = currentValueArray

// down here is how the cycle works
// a =  0, c =  1 => a =  1
// a =  1, c = -2 => a = -1
// a = -1, c =  3 => a =  2
// a =  2, c =  4 => a =  6
// a =  6, c =  5 => a = 11
const sum02 = numbers.reduce((accumulator, currentValueArray) => {
    return accumulator + currentValueArray;
}, 0); // zero is the value we set for the accumulator
// accumulator is like our sum variable in the previous example
// currentValueArray -> for each cycle the reduce() method does
// it takes the value of the array

console.log(sum02);

// ======================================================= //
         // SECOND -> CLEANER WAY REDUCE() METHOD
// NOW DO THA SAME THING BUT WITH THE reduce() METHOD
// legend //
// a = accumulator | c = currentValueArray

// down here is how the cycle works
// a =  1, c = -2 => a = -1
// a = -1, c =  3 => a =  2
// a =  2, c =  4 => a =  6
// a =  6, c =  5 => a = 11

const sum03 = numbers.reduce(
    (accumulator, arrayValue) => accumulator + arrayValue
);
// this code means that
// accumulator starting from value [0] of the array
// and arrayValue starting from  value[1] of the array
// the sum will be cycled and stored in accumulator var

console.log(sum03);