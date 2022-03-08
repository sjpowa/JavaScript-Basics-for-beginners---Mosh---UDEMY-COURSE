const array = [0, null, undefined, '', 2, 3, 10, 44]

// data una function called countTruthy
// e un array come sopra, con quegli elementi
// nella funzione voglio fare in modo che
// mi aumenti il conteggio di +1
// se il contenuto dell'array e' truthy

// TO REMEMBER
// Falsy elements:
// undefined
// null
// ''
// false
// 0
// NaN

function countTruthy(array){
    let count = 0;
    for(let ciclo of array) // ricorda che quando devi ciclare l'array devi usare of
    if(ciclo /*!= false && ciclo != undefined && ciclo != null*/){
        count++;
    }
    return count;
}

console.log(countTruthy(array));