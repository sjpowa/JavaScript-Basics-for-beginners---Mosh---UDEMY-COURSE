const person = {
    name: 'Pippo',
    surname: 'Cicciobello',
    age: 29
}

showProperties(person);

function showProperties(obj){
    // for(let ciclo in person)
    // console.log(ciclo, person[ciclo])

    // ora stampa solo le string
    for(let ciccio in person)
    if(typeof person[ciccio] === 'string')
    console.log(ciccio, person[ciccio])
}