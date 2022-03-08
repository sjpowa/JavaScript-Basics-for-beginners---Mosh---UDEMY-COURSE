// we have this array of obj down here

const movies = [
    { title: 'a', year: 2018, rating: 4.5},
    { title: 'b', year: 2018, rating: 4.7},
    { title: 'c', year: 2018, rating: 3},
    { title: 'd', year: 2017, rating: 4.5}
];

// I want to see in console
// All the movies in 2018 with rating > 4
// Desceding order by rating
// Pick their title
// so the output of this exercise is:
// 'b'
// 'a'

for (let i = 0; i < movies.length; i++) {
    movies.sort((a, b) => a.rating - b.rating)
    .reverse()
    if (movies[i].year == 2018 && movies[i].rating >= 4)
    console.log(Object.values(movies[i].title));
}

// ====================================================== //
// DOWN HERE WE HAVE THE PRO MOSH WAY..

const titles = movies
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title)

console.log(titles);

// che dire mosh.. ez