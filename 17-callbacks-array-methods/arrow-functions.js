// // Traditional function
// const add = function(x, y){
//     return x + y;
// }

// // Arrow function equivalent
// const add = (x, y) => {
//     return x + y;
// }

// const square = (num) => {
//     return num ** 2;
// }

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1;
// }

// // Dice Roller
// const roll = (numberOfDice, numberOfSides) => {
//     const diceBox = [];
//     for (i = 0; i < numberOfDice; i++) {
//         let resultOfRoll = Math.floor(Math.random() * numberOfSides) + 1;
//         diceBox.push(resultOfRoll);
//     }
//     return(diceBox);
// }

// Arrow function implicit returns. To use implicit returns, you replace the curly braces {} with parenthesis ()
// 
// const rollDie = () => (
//     Math.floor(Math.random() * 6) + 1
// )

// // You can also remove the parenthesis if you make a one-line function
// const add = (a, b) => a + b

// So, using what we've learned, how can we shorten the map functions we learned earlier?
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

// Traditional map function
// const newMovies = movies.map(function(movie){
//     return `${movie.title} - ${movie.score / 10}!`
// })

// New arrow function
const newMovies = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}!`
))
