// for-in
let colors = ['red', 'green', 'blue'];
for (let ccc in colors)
console.log(ccc, colors[ccc])

const person = {
    name: 'Sergio',
    surname: 'Mammt',
    age: 29
};

for (let stamp in person)
console.log(stamp, person[stamp])

// ===================================================

// for-of
// We can use the for-of when we have arrays
// so now i will print the array color with the for-of
// no [] needed
// WE CAN'T USE THE for-of FOR AN OBJECT

for (let printa of colors)
console.log(printa);