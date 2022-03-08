
function sum(...numbers) {
    return numbers;
}


console.log(sum(1,2,3,45,5)); // the rest operator works like the varargs on java
// it's like an array but where u don't know its dimension

function somma(...prices) {
    return prices.reduce((a, b) => a + b)
    // remember that a = counter
    // if we dont initialize a, its value by default is the first value of the array,
    // in this case is 20
    // b = arrayValue per every cycle
}

console.log(somma(20,2,3,4,56,7)); // we have the sum of every value of the array

function sumz(discount, ...prices) {
    const totalPrice = prices.reduce((a, b) => a + b);

    return totalPrice * (1 - discount);
}

console.log(sumz(0.1, 20, 50));

// ============================================== //
// REMEMBER THAT, as with varargs, ...parameterName HAS TO BE
// THE LAST ONE
// EXAMPLE

function ciao(...prezzi, sconto) { // in console we will have an error
    return sconto;
}

console.log(ciao(1,2,3,4,56));