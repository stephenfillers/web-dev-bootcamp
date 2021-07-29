// // Spread spreads an iterable (like an array or string) into separate arguments.

// const nums = [1, 23, 4, 532, 79079, 12, 421, 5758, 321]

// // Math.max doesn't work on arrays, but by spreading the array into separate arguments, Math.max is allowed to work.
// console.log(Math.max(...nums))
// console.log(Math.min(...nums))
// console.log(...'Hello world!') // Spreads the string into multiple arguments

// // We can use spread with array literals as well
// const cats = ['Blue', 'Scout', 'Rocket'];
// const dogs = ['Rusty', 'Wyatt'];

// // This merges the two arrays into a single array, as opposed to create an array of arrays.
// const allPets = [...dogs, ...cats]

// We can even use spread with objects!
const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' };

// This merges the two objects
const catdog = { ...feline, ...canine }

// // Use case. Take data from a user-generated form and add new data to it.
// const dataFormFrom = {
//     email: 'myemail@gmail.com',
//     password: 'plaintext',
//     username: 'tfunke'
// }
// const userData = { ...dataFormFrom, isAdmin: false, id: 2345 }