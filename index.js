// My first string in javascript prkdiquella
// what is a string? It's a sequence of characters
console.log('Ciao World!')

let namez = 'Sergio'
console.log(namez); // with this code i will see in the console the value of my variable

let nome = 'Maria', eta = 30;
console.log('Your name is ' + nome, 'and your age is ' + eta);
// btw Mosh does not suggest to write your code in this way
// because nowdays it is done just typing everytime the variable so
// do not use the comma but just press enter and write ur second or more type/variable to declare
// example
let porks = 'Humans';
let taxesNotPaid = 'Big Tech Companies';
console.log('I want to print the value of pork: ' + porks + '. Than i want the value of taxes not paid: ' + taxesNotPaid)

// another thing to keep in mind is that if you have the same name of a variable but with
// different case letter it will work, so u can do it and declare 2 or more names for different variables
// but with different uppercase or lowercase letters
// example
let sergiobho = 10; // lowercase first letter
let Sergiobho = 15; // uppercase first letter
console.log(sergiobho, Sergiobho);
// in this situation i will print my values with no problem
// i hope that i can understand it and in future i have not to come here to check this shit again
// LET'S GO FORWARD

// we can use to declare a variable with the keywords var, let or const
// var is deprecated and was used as let keyword
// let is useful if you have to change the value of the variable forward
// for example
let change = 0.3;
change = 11;
console.log('Change value was 0.3 but now is ' + change);
// so at this point Mosh suggested to use only const all the time but if u need to change the value in future or forward use let
// so by default when u have to declare a variable use const
// because once it is declared then you can't change it, u can't change the value
// example
/*
const sergioAge = 29;
sergioAge = 30;
console.log('Sergios age is ' + sergioAge); // ERROR!!! */
// with this code on the top you will see an error in the console of the webpage
// this is cuz the const cannot be changed after declared.
// better to repeat some concept so to keep in mind forever wtf u are doin


//  PRIMITVE VALUE TYPES
const string = 'Sergio'; // string type
const int = 30; // number type
const areYouOk = true; // boolean type that can be true or false
const doULikeCovid19 = false; // bool false value
const namename = undefined; // just undefined value
const nameznamez = null; // clear the value of a variable

// REFERENCE TYPES ===> Object, Array, Function

// 1) Object
let person = {
    name: 'Antonella',
    age: 30
};
console.log(person);

// DOT NOTATION, 
// It means that I can use the dot to recall a variable name and change its value. Let's do this
person.name = 'Gianco';
console.log(person);

// Bracket Notation
// with this sistem can be a problem about the recall of the name of a variable because u have to type
// manually the name and you can type wrongly something yuo don't want and have problems
// Let's see it anyway
person['name'] = 'Gabe';
console.log(person);
// if u have problems about it
// you can write a variable to recall the name of the variable and then change its value
// it's more difficult to explain that to do
// so let's see how to do it
let iNeedIt = 'name';
person[iNeedIt] = 'Asia';
console.log(person);

// ARRAY
let selectedColor = ['red', 'white'];
console.log(selectedColor); // we print the value of the array
console.log(selectedColor.length); // we print the length of the array
selectedColor[3] = 'blue'; // we add a value at the array in position 2
console.log(selectedColor);
console.log(selectedColor.length); // we print the length of the array, again...
console.log(selectedColor[1]); // we print the value in position one of the fk array
// if you go in the console and check the type of an array you will see that it is treated as an object
// so as u can see the array in javascript is DYNAMIC
// this means that increase or decrease the size of an array automatically just do simple things

