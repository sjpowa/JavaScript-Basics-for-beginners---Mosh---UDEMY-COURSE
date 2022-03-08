// name is a string type
// go in the console of the browser
    // and enter: typeof name
        // output will be: 'string'
let name = "Pippo";

// ====================================== //

// name2 is a type of 'object'
    // because String a Class like in JAVA
const name2 = new String("Pluto");

// ========================================= //

// if u go online and search for javascript string
// u will find all its methods

// examples

let message = ' Hello, my name is Giovanni Giorgio\nbut everybody calls me GioGio ';
console.log(message.length);
console.log(message);
console.log(message.indexOf('is')); // at which char 'is' is?!? -> position 15
console.log(message.split(" ")); // we split the phrase to every white space
console.log(message.trim()); // this String method will remove white spaces at the start and at the end of the phrase
console.log(message.replace('is', 'is not')); // -> we replace is -> is not
console.log(message.toUpperCase()); // i print all the message in UPPER CASE

// we can use some stuff like \n -> to create a new line and put all the stuff forward on the next line
    // i know all this stuff, but idmind, let's repeat them..

const message2 = 'Hello, my name is Giovanni Giorgio \n but everybody calls me GioGio';