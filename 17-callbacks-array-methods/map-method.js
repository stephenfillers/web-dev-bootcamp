// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// // .map is an array method that enacts a function on each item in an array. Unlike the forEach method 
// // .map assigns the returned value to a new array. This is why we save the whole operation to a variable
// // so we can call the new array by invoking the variable name.

// const doubles = numbers.map(function(num) {  
//     return num * 2;    
// })

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

// const titles = movies.map(function(movie){
//     return movie.title.toUpperCase();
// });

const titles = movies.map(movie => movie.title.toUpperCase())