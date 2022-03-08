// write an array with some numbers
// find the max value in there
// if u can use the reduce method to do it

const array = [111,200,233,40,5,6,7,8,9,10];

let maxValueArray = array[0];

for (let i = 0; i < array.length; i++) {
    if (maxValueArray < array[i])
    maxValueArray = array[i];
}

console.log(maxValueArray);

// ================================================= //
// OK, U HAVE DONE IT
// NOW DO THE SAME THING WITH THE REDUCE METHOD

let maxValueArray02 = array.reduce((a, b) => { // a is the counter, b is the value of the array per every cycle
    if (b > a)
    return b;
    return a;
})

console.log(maxValueArray);

// ================================================= //
// ANOTHER WAY TO DO IT IS WITH TERNARIES

let maxValueArray03 = array.reduce((a, b) => (a > b) ? a : b);

console.log(maxValueArray03);