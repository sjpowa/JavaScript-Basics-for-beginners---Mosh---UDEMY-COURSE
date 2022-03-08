
const person = {
    name: "Pippo",
    lastName: "Pluto"
}

for (let key in person)
    console.log(key + ': ' + person[key])

// my obj in this file is to clone Person obj to another obj

const another = {age: 30};

// FIRST WAY TO CLONE AN OBJ
for (let key in person) // this is the first method to do it
    another[key] = person[key];

// SECOND WAY IS TO USE THE default class called OBJECT and its METHOD CALLED assign()
const another2 = Object.assign({country: 'Italy'}, person);

// THE THIRD WAY IS SIMILAR TO THE VARARGS IN JAVA
    // U HAVE TO USE THE 3 DOTS ...nameObjToClone

const another3 = {city: 'Pompei' , ...person};