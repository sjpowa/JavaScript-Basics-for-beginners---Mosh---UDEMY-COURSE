
const array01 = [1,2,3,4,5,6,7,8,9,10];

for (let i of array01)
    console.log(i);

console.log('=================================\n');

array01.forEach( (element, index) => console.log(element, index));

console.log('=================================\n');

for (let i = 0; i < array01.length; i++) {
    console.log(array01[i] + ' <- VALUE | INDEX -> ' + i)
}