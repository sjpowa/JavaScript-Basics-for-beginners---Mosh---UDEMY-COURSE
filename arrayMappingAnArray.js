

const numbers = [1, 2, 3, 4, 5];

const items = numbers.map(function(value){
    return '<li>' + value + '</li>'
});

console.log(items)

const printItemsWithNoSpace = items.join('');

console.log(printItemsWithNoSpace);

// =========== ANOTHER WAY TO MAP ===================
const items02 = numbers.map( v => '<li>' + v + '</li>');    // mappinnn....
const noWhiteSpaces = items02.join('');
console.log(noWhiteSpaces);