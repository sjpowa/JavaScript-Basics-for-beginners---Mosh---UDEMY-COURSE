
// write an object called address with:
// street, city, zipCode, showAddress
// than create a function called showAddress(address) -> that takes an address obj
// and displays all the obj properties and values

let address = {
    street: 'Via Garibaldi',
    city: 'Napoli',
    zipCode: 80028,
}

function showAddress(address){
    for (let obj in address)
        console.log(obj, address[obj])
}

showAddress(address);