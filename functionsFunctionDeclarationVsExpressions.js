// ============== Function Declaration ==============
function walk() {
    console.log('walk');
}

walk(); // output => console.log('walk');

// ============== Function Expression ==============
let x = function run() {
    console.log('run');
}
x(); // output => console.log('run');

// ============== Anonimous Expression ==============
let y = function() {
    console.log('anon');
}
y(); // output => console.log('anon');

let j = y;
j(); // output => console.log('anon');