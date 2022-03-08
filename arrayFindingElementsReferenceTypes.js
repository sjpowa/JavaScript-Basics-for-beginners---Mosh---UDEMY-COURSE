const person = [
    { id: 1, name: 'Pippo'},
    { id: 2, name: 'Pluto'}
]

// to find an obj inside an array we have to use 
// the nameArray.find(function(nameArray){
//  return what u havet o return
// })
const p1 = person.find(function(person){
    return person.name === 'Pippo' // -> if this is true
    // -> guess.. we have all the object in the console, else -1 or undefined
});

const p2 = person.find(function(person){
    return person.name === 'Mary' // -> if this is true
    // -> guess.. we have all the object in the console, else -1 or undefined
});

console.log(p1);
console.log(p2);