// write an array numbers = [some numbers here]
// u have to create a function called except(array, excluded)
// so (array -> is the array... uuuh
// excluded is another array and the value passed in this
// array have to remove the values that are present in 'array'

const numbers = [1,2,3,4,5,6,7,8,9,10];

function except(array, excluded) {
    const output = [];
    for (let value of array)
        if (!excluded.includes(value))
            output.push(value);
    return output;
}

const deleteSomething = except(numbers, [5, 1, 7, 8, -1]);

console.log(deleteSomething);