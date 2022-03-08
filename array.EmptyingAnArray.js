// LET'S SEE HOW TO CLEAR ALL ARRAY ELEMENTS

let array = [1,2,3,4,5,6,7,8,9,10];
let array02 = array;

console.log(array);

// SOLUTION 1 -> set arryaName = [] -> EMPTY SQUARE BRACKETS
array = [];
let array03 = array;

console.log(array); // this will be an empty array
console.log(array02); // this one will print the array full of elements
// because it is poiting to array before it will be empty

console.log(array03); // array03 is empty because declared = to array
// after it became empty [];

// =========================================================
// SOLUTION 2 -> set arrayName.length = 0 -> EQUALS TO ZERO

array.length = 0;
array02 = array;
console.log(array02);

// =========================================================
// SOLUTION 3

let zero = array.splice(0, array.length); // -> from position [0] of the array
// delete all length of the array
console.log(zero);


// =========================================================
// SOLUTION 4

let array04 = [1,2,3,4,5,6,7,8,9,10];

console.log(array04.length)

while (array04.length > 0){
    (array04.pop());
}

console.log(array04)