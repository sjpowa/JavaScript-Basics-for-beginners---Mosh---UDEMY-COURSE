// se la funzione e' divisibile per 3 allora stampami buzz
// se la funzione e' divisibile per 6 allora stampami fizz
// se la funzione e' divisibile per entrambi stampa buzzfizz

let output = fizzBuzz(3)
console.log(output);


function fizzBuzz(input){
    if(typeof input !== 'number')
    return NaN;
    if(input % 3 === 0 && input % 6 === 0) 
    console.log('buzzfizz');
    if(input % 3 === 0)
    console.log('buzz');
    if(input % 6 === 0)
    console.log('fizz');
    return input
    // con questa riga diciamo che se non e'
    // nessuna delle precendenti allora
    // mostro il valore dell'output
}