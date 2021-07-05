const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

// // Traditional map function
// const movieMap = movies.map(function(movie) {
//     return `${movie.title} - ${movie.score / 10}`;
// });

// More compact arrow function variant
const movieMap = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`
))
