// instead of this
let msg = 'Hello World\n'
+ 'my name is Sergio';

console.log(msg);


// ================ TEMPLATE == LITERALS ============= //
// we can use this
    // the TEMPLATE LITERALS..

let msg2 = `Hello World
my name is Sergio`; // instead of using the new line with \n
    // we have used ` -> BACK QUOTE
    // with it we can write a msg and if we press enter to on a new line
    // we actually go on a new line without problems

console.log(msg2); // as u can see the output is the same of msg

// another example that maybe can be more efficient
// let's write an email mag..

// =========== ANOTHER == EXAMPLE================ //

let emailMsg =
`Hello Mary

this is Sergio here,

I just want to say thank u for joining my Discord Server


Have a nice day

Sergio`

console.log(emailMsg); // the output in the console will have the same form as i wrote it here..

// ============== HERE WE USE THE DOLLAR LITERAL -> YARI CALLED IT INTERPOLATION.. ================

let personName = ["Paperino", 'Pluto', 'Pippo'];

let msg3 =
`Hello ${personName[1]}

this is Sergio here,

I just want to say thank u for joining my Discord Server


Have a nice day

Sergio`

console.log(msg3);

// REMEMBER THAT U CANT MAKE A COMMENT WITH DOUBLE SLASH // IN HERE ---> `body`
// DOLLAR SIGN NEED CURLY BRACES ---> ${name}