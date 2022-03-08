
const firstArray = [1,2,3,4,5];
const secondArray = [6,7,8,9,10];

console.log(firstArray);
console.log(secondArray);

// CONCAT() IS THE METHOD TO LINK TWO ARRAYS
const concatena = firstArray.concat(secondArray);
console.log(concatena);

// SLICE() TO -> SLICE AN ARRAY OR THE CONCAT ARRAY
const spezza = concatena.slice(2, 5); // we take the values from position[2] to [5]
console.log(spezza); // we print values from [2] to [5]

// ================ EXAMPLE WITH OBJ IN AN ARRAY ==============

const arrObj = [{ id: 1}];

const concatenaWithObj = arrObj.concat(secondArray);
console.log(concatenaWithObj);

const spezzaWithObj = concatenaWithObj.slice(); // se non dichiari da dove vuoi
    // prendere i dati...
console.log(spezzaWithObj); // ... avremo una copia di quello che vorremmo slice-are()
