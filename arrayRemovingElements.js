
const numbers1 = [11, 22, 33, 44, 55];
const numbers2 = [11, 22, 33, 44, 55];
const numbers3 = [11, 22, 33, 44, 55];

// REMOVE THE LAST ELEMENT OF AN ARRAY
const lastNumber = numbers1.pop();
console.log('THE ARRAY VALUES\nAFTER THE last ELEMENT HAS BEEN DELETE\nIS ---> [' + numbers1 + ']');
console.log(lastNumber);    // we print the value deleted from the array

// REMOVE THE FIRST ELEMENT OF THE ARRAY
const firstNumber = numbers2.shift();
console.log('THE ARRAY VALUES\nAFTER THE first ELEMENT HAS BEEN DELETE\nIS ---> [' + numbers2 + ']');
console.log('VALUE OF THE FIRST POSITION OF THE ARRAY DELETED IS: ' + firstNumber);

// REMOVE ONE OR MORE ELEMENT IN THE MIDDLE
const middleNumbers = numbers3.splice(2, 1);   // in position [2] i delete 1 position,
console.log(numbers3);