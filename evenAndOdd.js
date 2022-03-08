// show the rows and if they are % of 2, print EVEN
// otherwise print ODD

showNumbers(10)

function showNumbers(limit){
    for (let index = 1; index <= limit; index++) {
        // if(index % 2 === 0) // se index e' divisibile per 2 e mi ritorna zero significa che e' effettivamente divisibie per due
        // console.log(index, 'EVEN');
        // else console.log(index, 'ODD');
        let message = (index % 2 === 0) ? 'EVEN' : 'ODD'
        console.log(index, message)
    }
}