
const array01 = [1,2,3,4,5,6,7,8,9];
const array02 = [9,8,7,6,5,4,3,2,1];

console.log(array01);
console.log(array02);

// THE SPREAD OPERATOR COULD BE MORE EZ TO USE THAN CONCAT()
// LET'S SEE
// const concat = array01.concat(array02); // -> instead of this we do..
const concat = [...array01, ...array02]
console.log(concat);


// NOW LET'S DO THE concat.slice() TO COPY THA COMBINED ARRAYS
// const spezza = concat.slice(3, 6); // instead of doing this.. we do.
const copy = [...concat];
console.log('THIS IS A COPY ->\n -> ' + copy);