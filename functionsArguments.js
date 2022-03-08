// IN THIS LECTURE/ EXAMPLES
// WE WILL SEE WHAT IS ARGUMENTS

// ARGUMENT

function sum(a, b) {
    return a + b;
}

console.log(sum(1, 5)); // ordinary life

console.log(sum(1)); // if we dont use all the parameters
    // that parameter will have UNDEFINED VALUE
    // so 1 + UNDEFINED = NaN

console.log(sum(1,5,6,9,7)); // this function will do the sum
    // of only the first two parameters

// BUT NOW WE CAN SEE 'ARGUMENT'
function somma() {
    let totalSum = 0;
    for (let value of arguments)
        totalSum += value;

    return totalSum;
}

console.log(somma(1,2,3,4,5,6)); // all the numbers in there will be cicled

// HOW ARGUMENTS WORKS / PRINT IN CONSOLE
function idk(){
    for (let i of arguments)
    console.log(arguments);
}

idk(1,2);

// ARGUMENTS LOOKS LIKE AN ARRAY BUT IT WORKS LIKE AN OBJECT