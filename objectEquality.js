function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

const add1 = new Address("Via Roma", "Torre Annunziata", 80058);
const add2 = new Address("Via Roma", "Torre Annunziata", 80058);
// console.log(add1);

// WE HAVE TWO OBJECTS
// U HAVE TO WRITE TWO FUNCTIONS
// FIRST FUNCTION CHECK IF THE PROPERTIES OF THE TWO OBJs ARE THE SAME, IF Y RETURN TRUE AND PRINT IN CONSOLE
// SECOND FUNCTION CHECK IF THE TWO OBJs ARE POINTING TO THE SAME MEM.ADDRESS
// function 1 is areEqual()
// function 2 is areSame()

// ========== FUNCTION 1 == areEquals() =========== //
function areEqual(){
    for (let prop in add1, add2){
        if (add1[prop] === add2[prop])
            return true;
        else
            return false;
        // console.log(add1[prop], add2[prop])  // i print the properties values
    }
}

console.log(areEqual());

// ========== FUNCTION 2 == areSame() =========== //

function areSame(){
    return add1 === add2; // with this code we say that if add1 points the memory address of add2 it will return true, else will be false
    // REMEMBER, LIKE ON JAVA AND C#, IF U PRINT AN OBJ U WILL SEE IN THE CONSOLE THE OBJ MEM.ADDRESS
}

console.log(areSame());

