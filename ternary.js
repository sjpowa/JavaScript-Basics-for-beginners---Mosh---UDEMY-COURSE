// if we have a customer with more than 100 points
// he will be a gold customer, otherwise bottom 100pt he will be a silver

let x = 110; // we declare the points
let points = x > 100 ? 'gold' : 'silver'; // if the 110 points are more > than 100 
// the customer is gold
// but if he has less : he will be silver

console.log(points);