// like on yelp website there is a filter button that says with one/or more dollar symbols $, $$, $$$, $$$$
// if a restaurant is expensive or not

// write some code that shoudl function right with that filter

const priceRange = [  // we declare a variable array with inside some objects to define the range of prices
    {label:'$'  , tooltip: 'Inexpensive',  minPerPerson: 0  , maxPerPerson: 10},
    {label:'$$' , tooltip: 'Moderate'   ,  minPerPerson: 11 , maxPerPerson: 20},
    {label:'$$$', tooltip: 'Expensive'  ,  minPerPerson: 21 , maxPerPerson: 50}
];

let restaurants = [
    {averagePerPerson:  5},
    {averagePerPerson: 12},
    {averagePerPerson: 25},
    {averagePerPerson:  2},
    {averagePerPerson: 15},
    {averagePerPerson: 17}
];

// con questo doppio ciclo for
// i have printed in the console how many dollar symbols has a restaurant
// to tell people if a restaurant is an expensive one or not..
for (let i = 0; i < restaurants.length; i++) {
    for (let j = 0; j < priceRange.length; j++) {
       if (restaurants[i].averagePerPerson > priceRange[j].minPerPerson
            && restaurants[i].averagePerPerson < priceRange[j].maxPerPerson) {
                console.log('Restaurant nr.' + (i+1) + ': ' + priceRange[j].label)
        }
    }
}

// divertente da fare.. anche perche' non era complicato xD..
    // cmq qui si deve ragionare in modo diverso rispetto a java or c#..
// confondersi tra un classico language oop e js e' facile..