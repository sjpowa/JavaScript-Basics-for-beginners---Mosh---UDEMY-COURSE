
const person = [
    { id: 1, name: "Pluto"},
    { id: 2, name: "Mario"}
]

// THIS IS THE CLASSIC WAY SHOWED BEFORE..
// console.log(person.find(function(person){
//     return person.name === 'Mario';
// }));

        // ========== NEW == WAY ============ //

// ========== THIS IS LIKE A LAMBDA EXPRESSION ========= //

const p1 = person.find(person => person.name === 'Mario');
console.log(p1);