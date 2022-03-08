// HERE WE SEE HOW TRY CATCH WORKS

const person03 = {
    firstName: 'Nicole',
    lastName: 'Kidman',
    get fullName() {
        return `${person1.firstName} ${person1.lastName} `
    },
    set fullName(value) {
        const e = new Error(); // we create an error called 'e'
        if (typeof value !== 'string')
            throw new Error('Value is not a string.');
            
        const parts = value.split(' '); // splittiamo nome e cognome con white space
        if (parts.length !== 2)
            throw new Error('Enter a first and last name..')        

        this.firstName = parts[0];  // dopo lo split si crea un array
        this.lastName = parts[1];    // come facevamo su C# con lo streamreader
    }
};

console.log(person03); // output Nicole Kidman
try {
    person03.fullName = true;   // so if the type of is not a string
} catch (e) {
    console.log(e); // we print this personalized error in console
}

try {
    person03.fullName = '';   // so if the type of is not a string
} catch (e) {
    console.log(e); // we print this personalized error in console
}

console.log(person03); // output Maccio Capatonda