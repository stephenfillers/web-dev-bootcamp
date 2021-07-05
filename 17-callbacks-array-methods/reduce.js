const prices = [9.99, 1.50, 19.99, 49.99, 30.50]

// Let's use reduce to find the total of all items in this array
// Here's the 'for of' solution

// let total = 0;
// for (let price of prices) {
//     total += price
// }
// console.log(total)

// Here's the solution using .reduce

// // Longhand
// const total1 = prices.reduce((total, price) => {
//     return total + price
// })

// // Shorthand
// const total2 = prices.reduce((total, price) => total + price)

// // Let's use reduce to find the smallest item in the array

// const minimum = prices.reduce((min, price) => {
//     if (price < min) {
//         return price;
//     }
//     return min;
// })


// Let's find the highest rated movie in our movies array
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

const highestRated = movies.reduce((bestMovie, currMovie) => {
    if (currMovie.score > bestMovie.score) {
        return currMovie;
    }
    return bestMovie;
})


// You can specify an initial value by adding a second argument to reduce. In this case, I will add 100
const evens = [2, 4, 6, 8];
total = evens.reduce((sum, num) => {
    return sum + num;
}, 100)

// Let's make it easier to read
total2 = evens.reduce((sum, num) => sum + num, 100)