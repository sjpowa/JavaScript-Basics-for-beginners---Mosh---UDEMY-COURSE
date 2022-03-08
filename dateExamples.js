// DATE IS A CLASS AND HAS A LOT OF CONSTRUTORS TO FORMAT THA DATE HOW U WANT
const time1 =  new Date();

console.log(time1);

// ======================================

const time2 = new Date(2022, 00, 21);   //REMEBER THAT HERE IN JS DATE() STARTS FROM 0..
// SO MONTH[0] IS JANUARY
// MONTH[11] IS DECEMBER

console.log(time2);

// ======================================

const time3 = new Date(2023, 2, 21);

console.log(time3.getFullYear());
console.log(time3.getMonth());
console.log(time3.getDate());   // getDate() is the method to get the day..

