// i want to see the sum when u recall
// something like sum(1, 2, 4, 3, 6) => output 16

function sum(...numbers) {
    console.log(Array.isArray(numbers)); // numbers e' un array
                                        // se esce true in console ovviamente si
    return numbers.reduce((a, b) => a + b)
}

console.log(sum(1,2,4,3,6));
