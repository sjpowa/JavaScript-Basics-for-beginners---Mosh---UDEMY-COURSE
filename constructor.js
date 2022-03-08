
// Constructor Function

function Circle(radius){    // constructor f. want Pascal Name Sintax -> OneTwoThreeFour
    this.radius = radius;
    this.draw = function() {
        console.log("Draw Circle");
    }
}

const circle = new Circle(1);
console.log(circle, circle.draw());

// =================ANOTHER==EXAMPLE=================== //

function Person(name, lastName, age){
    this.name = name;
    this.lastName = lastName;
    this.age = age;
}

const p = new Person("Pluto", "Putin", 35);
console.log(p);
const p2 = new Person("Mary", "Jay", 25);
console.log(p2);
