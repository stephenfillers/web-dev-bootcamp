// 1.) forEach is somewhat replaced by the 'for of' loop. forEach executes a function on each item
// in an array. Below, I call a function that squares (n * n) the passed-in argument. I then use the 
// forEach array method on the numbers array 'numbers.forEach' and pass in my square function as an argument.
// ALERT, there are better ways of achieving this. See item 2.)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// function square(el){
//     console.log(el * el);
// }

// numbers.forEach(square)

// // 2.) Lets create the same thing, but using an inline function. Rather than pass in a predefined function,
// // we can write the function inline as an argument. 

// numbers.forEach(function(el) {
//     if (el % 2 === 0) {
//         console.log(el)
//     }
// })

// // As mentioned earlier, forEach has mostly been replaced by the simpler 'for of' loop.

// for (let el of numbers) {
//     console.log(el * el);
// }


// Let's now operate the forEach method over an array of objects

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

// The movie parameter could be anything, like 'el', or 'cat', or anything else

movies.forEach(function(movie){
    console.log(`${movie.title} - ${movie.score}/100`);
});