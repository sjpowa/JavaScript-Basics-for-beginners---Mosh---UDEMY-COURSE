// write a function that takes
// two numbers and returns the maximum
// of the two

// in pratica, scrivi due numeri
// fai una funzione in modo che
// stampi sempre il numero piu' grande

// let number = max(50,40)
// console.log(number);

// function max(number1, number2){
//     if(number1 > number2)
//     return number1;
//     return number2
// }

// =============================================

// as previous exercise

let max = isLandScape(30,70)

function isLandScape(width, height){
    return (width > height) ? width : height
}

console.log(max);