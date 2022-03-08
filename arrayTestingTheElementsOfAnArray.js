
const numbers = [-1, -2, -3, -4, -5, 6, -7];

// CHECK IF ALL VALUES OR THE ARRAY ARE POSITIVE
// IF JUST ONE VALUE IS NEGATIVE WE HAVE IN CONSOLE A FALSE!
const areAllValuesPositive = numbers.every(function(value){
    return value >= 0;
})

console.log(areAllValuesPositive);

// ======================================= //
// ===== CHECK AT LEAST ONE POSITIVE ===== //

const atLeastOnePositive = numbers.some(function(t){
    return t >= 0;
})

console.log(atLeastOnePositive);