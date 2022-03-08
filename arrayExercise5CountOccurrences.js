// write an array called numbers = [some numbers here..]
// create a function called countOccurences(array, searchElement)
// print in console how many times the search element
// is present in the array

const numbers = [1, 4, 3, 4, 5];

function countOccurences(array, searchElement) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == searchElement)
            counter++;
    }
    return counter;
}

const checkNumber = countOccurences(numbers, 4);
console.log('THE VALUE IN THE ARRAY\nIS PRESENT nr.' + checkNumber + ' TIMES');

// ====================================== //
// this is instead the Way Mosh wanted to see..

// with the reduce method u have to do the same job..

function countOccurences02(array, searchElement) {
    return array.reduce((accumulator, currentValue) => { // accumulator is a counter
        const occurrence = (currentValue === searchElement) ? 1 : 0;
            return accumulator + occurrence;
    }, 0); // , 0 means the value we seto to accumulator at the beginning
}   // current value is the value of the array that will cycle

const provola02 = countOccurences02(numbers, -1);
console.log(provola02);