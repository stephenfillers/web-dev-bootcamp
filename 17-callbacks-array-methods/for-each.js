const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// // forEach is a method that runs a function for each item in an array.
// // el, or element, is commonly used as the parameter name, but this could be anything.
// numbers.forEach(function (el) {
//     if (el % 2 === 0) {
//         console.log(el);
//     }
    
// });

// // You can achieve identical results, using a for of loop
// for(let el of numbers) {
//     console.log(el);
// }

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

// You attach .forEach as a method onto the chosen array's variable name. (movies in this case.)
// You then insert a function with a component name of your choice. (movie makes sense here)
// This component is representative of each item in the array
// forEach then runs over each item in the chosen array, and executes our function over each item.
// In this case, forEach is running our function over an array of objects.
// Because each item is represented by our component's name (movie), you must call the component to make use of the data.
movies.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`)
})