
const person = {
    firstName:'Sergio',
    lastName: 'Rossi'
};

console.log(person);
console.log(`${person.firstName} ${person.lastName}`);

// instead of that we can do this way

const person1 = {
    firstName: 'Pascal',
    lastName: 'Morngia',
    fullName() {
        return `${person1.firstName} ${person1.lastName} `
    }
};

console.log(person1.fullName());

// NOW WE USE GETTERS AND SETTERS SO WE CAN CREATE AND RECALL PERSON
const person03 = {
    firstName: 'Nicole',
    lastName: 'Kidman',
    get fullName() {
        return `${person1.firstName} ${person1.lastName} `
    },
    set fullName(value) {
        const parts = value.split(' '); // splittiamo nome e cognome con white space
        this.firstName = parts[0];  // dopo lo split si crea un array
        this.lastName = parts[1];    // come facevamo su C# con lo streamreader
    }
};

console.log(person03); // output Nicole Kidman

person03.fullName = 'Maccio Capatonda';

console.log(person03); // output Maccio Capatonda