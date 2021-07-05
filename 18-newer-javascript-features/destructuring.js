// // Destructuring arrays
// const scores = [980308, 908021, 941231, 812364, 612323, 601234, 578234, 541231];

// // Syntax const [] = arrayName;
// const [gold, silver, bronze, ...everyoneElse] = scores;

// // Destructuring objects
const user = {
    email: 'harvey@gmail.com',
    password: 'siov23sdf0jl#$',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Some text here',
    city: 'San Francisco',
    state: 'California'
}

// const user2 = {
//     email: 'stacy@gmail.com',
//     firstName: 'Stacy',
//     lastName: 'Gonzalez',
//     born: 1987,
//     city: 'Tulsa',
//     state: 'Oklahoma'
// }

// // // Similar syntax to the array above, but we use curly brackets
// // const {firstName, email, bio, city, state} = user;
// // const {born: birthYear, died: deathYear = 'N/A'} = user; // Use a colon to rename a key to something of your choosing. 

// // We can also set default values. Default values are only used if the key already doesn't match to a value.
// const {city, state, died = 'N/A'} = user2;

// Destructuring Parameters

// function fullName(user) {
//     const {firstName, lastName} = user;
//     return `${firstName} ${lastName}`;
// }

function fullName({firstName, lastName}) {
    return `${firstName} ${lastName}`;
}

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

movies.filter(movie => movie.score >= 90)
movies.filter(({score}) => score >= 90)

// Traditional function
const ratings = movies.map(movie => {
    return `${movie.title} (${movie.year}) is rated ${movie.score / 10}/10`
})

// Using destructuring
const ratings2 = movies.map(({title, score, year}) => {
    return `${title} (${year}) is rated ${score/10}/10`
})