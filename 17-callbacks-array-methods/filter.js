// The filter method operates on all items in a given array and only allows for a boolean callback function. It then creates
// a new array filled with all elements that pass a given true/false (boolean) function.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// const underTen = numbers.filter(nums => nums < 10)

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

// // Filter pratice

// const goodMovies = movies.filter(movie => movie.score > 80)
// const badMovies = movies.filter(movie => movie.score < 70)
// const recentMovies = movies.filter(movie => movie.year > 2000)

// // You can also combine array methods like .map and .filter
// const goodTitles = goodMovies.map(movie => movie.title)

// // Rather than use .map and .filter on seperate variables, you can use them in the same line
// const goodTitles2 = movies.filter(movie => movie.score > 90).map(movie => movie.title)

// // You can indent this if it becomes difficult to read
// const goodTitles2 = movies
//     .filter(movie => movie.score > 90)
//     .map(movie => movie.title)

const validUserNames = usernames => (
    usernames.filter(username => username.length < 10)
)