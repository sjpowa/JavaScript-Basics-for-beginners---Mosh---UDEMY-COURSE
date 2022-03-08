const numbers = [1, 2, 3, 4, 1, 6];

// FIND THE POSITION OF THE NUMBER 1 IN THE ARRAY
console.log('THE POSITION OF NUMBER 1 IN THE ARRAY IS: [' 
+ numbers.indexOf(1) +']');

// FIND THE LAST POSITION OF THE NUMBER 1 IN THE ARRAY
console.log('THE LAST NUMBER 1 PRESENT IN THE ARRAY IS AT POSITION NR. ['
+ numbers.lastIndexOf(1) + ']');

// WHAT HAPPEN IF U WANT TO FIND SOMETHING NOT PRESENT IN THE ARRAY
// console.log(number.indexOf('1')); // according to Mosh the console should return -1 but
    // the console will just give an error about the fact that the number/someThingElse is not defined
    // in the array

console.log('DOES NUMBER 1 IS IN THE ARRAY? [TRUE/FALSE] -> ' + numbers.includes(1));
console.log('THIS IS ANOTHER WAY..\nBUT THE UGLY WAY..\nTO CHECK IF A NUMBER\nIS PRESENT IN THE ARRAY -> ' + (numbers.indexOf(1) != -1));