// le factory functions hanno la stessa funzione dei costruttori
// e' un modo alternativo per creare oggetti
// rispetto alla modalita' che si usa di solito su JAVA o su C#

function createPerson(name, lastName, age) {
    // REMEMBER THAT FUNCTIONS WANT ITS NAME AS camelNotation -> oneTwoThreeFour
    // THIS MODUS OPERANDI IS EQUALS TO FACTORY FUNCTIONS TOO
    return {
        name,
        lastName,
        age,
        adult(){
            if (age > 18)
            console.log("Adult");
            else
            console.log("Young");
        }
    }
}

const Person1 = createPerson("Sergio", "Rossi", 15);    // wtih factory f. we dont have a constructor, it's just a function!
                                                            // so no -> new createPerson needed..
console.log(Person1);   // this will return all the properties but not the methods
console.log(Person1.adult());   // we call the method and print it in the console

const Person2 = createPerson("Pippo", "Zar", 50);
console.log(Person2);
console.log(Person2.adult());


// ====================================================== //

// ================= DOWN HERE IS THE LONGER AND UNGLIER SINTAX OF THE PREVIOUS -> FACTORY FUNCTION =========
// function createPerson(name, lastName, age){
//     return {
//         name: name,
//         lastName: lastName,
//         age: age,
//     }
// }
