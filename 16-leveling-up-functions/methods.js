// "hello".toUpperCase() // A string method
// [1, 2, 3].indexOf(2) // An array method
// function add (x, y){return x + y} // A function

//// So, what's the difference between a method and a function?
//// Every method IS actually a function, but not every function is a method.
//// Let's make our own method.

// Methods are actually properties assigned within an object. See below
const myMath = {
    PI: 3.14,
    square: function(num) {
        return num * num;
    },
    cube: function(num) {
        return num ** 3;
    }
}

// Here's the handy shorthand way to create methods
const myMathNew = {
    PI: 3.14,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}