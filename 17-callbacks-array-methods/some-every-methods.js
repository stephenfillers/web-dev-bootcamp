// The .every array method determines whether or not all items in an array pass a certain boolean test.
// The .some array method determines whehter or not any of the items pass a certain boolean text.

// const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77, 70]

// let passEvery = exams.every(score => score >= 75) // false
// let passSome = exams.some(score => score >= 75) // true

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going on 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

const newMovies = movies.some(movie => movie.year > 2015)