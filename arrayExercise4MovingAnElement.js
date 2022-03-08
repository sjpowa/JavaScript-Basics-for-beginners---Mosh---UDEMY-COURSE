// write an array numbers [some numbers here]
// create a function called move with 3 parameters
// move(array, index, offset)
// so in the array that will pass
// decide the index => so the value that u have to move
// offset is of how many position u move that value in the array

const numbers = [11, 22, 33, 44, 55];

const output = move(numbers, 0, 2);

console.log(output);

function move(array, index, offset){
    const position = index + offset;
    if (position >= array.length || position < 0) {
        console.error('Invalid offset.');
        return;
    }


    const output = [...array]; // cloning array
    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;
}
