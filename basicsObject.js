
let x = 2;
let y = true;

const Person = {
    name : "Sergio",
    lastname : "Rossi",
    age : 30,
    student : function(){
        console.log("Ciao " + Person.name
        + " "
        + Person.lastname)
    }
}

Person.student();