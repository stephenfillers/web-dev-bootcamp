// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// // Map is an array method that allows you to perform an action on items with an array. 
// // The changes made to the array based on this action are saved to a wholy new array.

// const doubles = numbers.map(function (num){
//     return num * 2;
// })

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Stand By Me',
//         score: 85
//     },
//     {
//         title: 'Parasite',
//         score: 95
//     },
//     {
//         title: 'Alien',
//         score: 90
//     }
// ]

// const movieTitles = movies.map (function (movie) {
//     return movie.title.toUpperCase();
// })

const cleanNames = function(array){
    return array.map(function(item){
        return item.trim();
    })
}
