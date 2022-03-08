// Write a function called showPrimes(20)
// this function has to print all the PRIME NUMBERS to 20

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++) {
        let isPrime = true;
        for (let factor = 2; factor < number; factor++) {
            if (number % factor === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) console.log(number);
    }
}

// //You can understand the execise with this code below
// function showPrimes(limit) {
//     for (let number = 2; number <= limit; number++) {
//         for (let factor = 2; factor < number; factor++) 
//            console.log('number is: ' + number +
//            ' || factor is: ' + factor)
//     }
// }

console.log(showPrimes(10));