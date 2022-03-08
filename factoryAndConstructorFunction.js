// use tha result of the previous exercise Address Object
// and write one or more obj, like it, but
// one using Factory Function and another one using a Constructor

// ==================== FACTORY == FUNCTION ====================

function address(street, city, zipCode){
    return {
        street,
        city,
        zipCode
    }
}

const add1 = address("Via Vesuvio", "Milano", 60127);
console.log(add1);

// =============================================================

// ================== CONSTRUCTOR == FUNCTION ==================

function Person(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
}

const p1 = new Person("Minnie", "Zar", 52);
console.log(p1);