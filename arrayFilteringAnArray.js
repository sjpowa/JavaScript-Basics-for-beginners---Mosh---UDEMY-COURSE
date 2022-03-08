
const numbers = [1, 2, 3, -4, 5];

// FILTER -> RETURN THE ELEMENTS OF AN ARRAY THAT MEET THE CONDITION
// SPECIFIED IN A CALLBACK
const returnPositiveNumbersArray = numbers.filter(function(value){
    return value >= 0;
})

console.log(returnPositiveNumbersArray);

const returnNegativeNunbers = numbers.filter(v => v < 0)
console.log(returnNegativeNunbers);