// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// numbers.filter(n => {
//     return n < 10
// })

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 2013
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2020
    },
    {
        title: 'Alien',
        score: 90,
        year: 1989
    },
    {
        title: 'Poopeigh',
        score: 35,
        year: 2020
    },
    {
        title: 'Trashboat',
        score: 20,
        year: 1942
    }
]

const goodMovies = movies.filter(movie => {
    return movie.score > 80
})

const badMovies = movies.filter(movie => {
    return movie.score < 50
})