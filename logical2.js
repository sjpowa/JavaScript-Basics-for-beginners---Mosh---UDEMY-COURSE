// Falsy
// undefined
// null
// 0
// false
// ''
// NaN ===> Not A Number

let userColor = undefined; // if we give here a color
// we will get always the color
let defaultColor = 'black';
let currentColor = userColor || defaultColor;
console.log(currentColor);