
// ========================= VALUES ========================== //
let x = 10;

let y = x;

x = 20;

// go in the console and type x + enter
    // to check its value..

// do the same thing for the y value..

// as u can see:
    // x = 20;
    // y = 10;

// the values are indipendent..

// ========================= REFERENCES ========================== //

// DIFFERENT THINGS INSTEAD FOR THE REFERENCES..

let obj = {value : 10}; // if u run the function increase and check value
                        // its value is not 10, but 11
                        // cuz the reference points on that address of memory
                        // and ovveride it
                        // the concept is similar to OOP but more difficult to understand here
                        // cuz u have to do some practice dont have confusion between
                        // oop with their encapsulation/methods..
                        //..here we have function + methods and if u are on this lang
                        // for the first time is ez to go in confusion with the logic
                        // of oop..

function increace(obj) {
    obj.value++;
}

increace(obj);  // we call this function, so it will run and +1 to value
console.log(obj.value);