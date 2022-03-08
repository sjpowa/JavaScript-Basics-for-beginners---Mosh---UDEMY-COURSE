
const person = {
    name: "Sergio",
    lasteName: "Rossi",
}

// print obj prop in the console
console.log('\n================================\n'
+ 'ORIGINAL OBJECT')
console.log(person);

// add prop in the obj and print
person.country = "italy";
person.age = 30;
console.log('\n================================\n'
+ 'AFTER ADDING OTHER PROPERTIES')
console.log(person);

// delete something u have added and print it in the console
console.log('\n================================\n'
+ 'AFTER THE DELETE OF A PROPRETY')
delete person.country;
console.log(person);