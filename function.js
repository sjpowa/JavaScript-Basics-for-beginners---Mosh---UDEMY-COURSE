// FUNCTION Performing a task
function ciao(nome, cognome){
    console.log('Ciao ' + nome + ' '+ cognome)
}

ciao(); // here i recall the name of the function to make it print in the console
ciao('Sergio');
ciao('Sergio', 'Pincopallino')

// if u don't declare the value/argument of the parameter
// the console will show undefined

// FUNCTION calculating a value

function mammt(numero){
    return numero + numero // calculation
}

let numero = mammt(5); // declare a value for the parameter
console.log(numero); //  print in console the return
