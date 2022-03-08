
const numbers = [1,2,3,4,5];

// join()
const joiner = numbers.join(','); // stiamo usando la virgola per
        // concatenare ogni valore per ogni posizione successiva
console.log(joiner);
// output -> 1,2,3,4,5

const joiner02 = numbers.join('-');
console.log(joiner02);
// output -> 1-2-3-4-5

// split()
const msg = 'Ciao mamma guarda come mi diverto'
const msgSplitted = msg.split(' ');
console.log(msg);
console.log(msgSplitted);