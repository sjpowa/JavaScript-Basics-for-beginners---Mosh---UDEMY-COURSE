console.log(sum(10));

// Multiples of 3: 3, 6, 9;
// Multiples of 5: 5, 10;

// we have to print the sum of the multiple of 3
// and 5
// 3+6+9 +5+10 = 33

function sum(limit) {
    let sum = 0;
    for (let index = 0; index <= limit; index++) {
        if(index % 3 === 0 || index % 5 === 0)
        sum += index;
    } 
    return sum;
}


// stesso esercizio di sopra ma rifatto completamente da solo
// per imparare meglio perche' prk di quella bisogna essere
// bravi e percisi

console.log(somma(20))

function somma(limite) {
    let sommaTutto = 0;
    for( i = 0; i <= limite; i++){
        if(i % 2 === 0)
        sommaTutto += i;
    }
    return sommaTutto;
}