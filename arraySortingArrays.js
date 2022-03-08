
const numbers = [2, 1, 3];

numbers.sort(); // sort = ascend sort
console.log(numbers);

numbers.reverse(); // reverse = descend sort
console.log(numbers);

// ======================================== //

// ====== AND IF WE HAVE TO SORT AN OBJECT?!? ====== //

const courses = [
    { id: 1, name: 'Javascript'},
    { id: 2, name: 'c#'}
]

courses.sort(function(a, b){
    // a  <  b  => -1
    // a  >  b  =>  1
    // a === b  =>  0
    const aName = a.name.toLowerCase(); // remeber ASCII TABLE..
    const bName = b.name.toLowerCase();
    if (aName < bName) return -1;
    if (aName > bName) return -1;
    return 0;
});

console.log(courses);