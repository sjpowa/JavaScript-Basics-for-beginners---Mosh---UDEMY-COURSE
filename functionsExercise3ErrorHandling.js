
try {
const numbers = [1, 4, 3, 4, 5];
const count = countOccurences(null, 3);
console.log(count);
} catch (c) { // no matter what or how u call the exception.. this is not java or c#
    console.log(c.message);
}

function countOccurences(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error('Invalid array.');

    return array.reduce((accumulator, currentValue) => {
        const occurrence = (currentValue === searchElement) ? 1 : 0;
            return accumulator + occurrence;
    }, 0);
}
