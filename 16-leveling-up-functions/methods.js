// "hello".toUpperCase() // A string method
// [1, 2, 3].indexOf(2) // An array method
// function add (x, y){return x + y} // A function

// // So, what's the difference between a method and a function?
// // Every method IS actually a function, but not every function is a method.
// // Let's make our own method.

// const myMath = {
//     PI: 3.14159,
//     square: function (num) {
//         return num * num;
//     },
//     cube: function (num) {
//         return num * num * num;
//     },
//     newSquare(num) {
//         return num * num;
//     },

// }

const square = {
    area(num) {
        return num * num;
    },
    perimeter(num) {
        return num * num * num * num;
    }
}