// Arrow functions are the shorthand way of writing function expressions. Similar to function epxressions, they cannot 
// stand on their own and must first be assigned to a variable or used as a parameter.

// This is the traditional function expression
const add1 = function(x, y) {
    return x + y;
}

// Here's that same function, but written as the more compact arrow function.
const add2 = (x, y) => {
    return x + y;
}

// Arrow functions practice.
const square = num => {
    return num * num;
}

// If the function has no arguments/parameters, you're still required to use parentheses.
const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
}

// If a function has only one argument/parameter, the parentheses are optional
const rollDie2 = num => {
    return Math.floor(Math.random() * num) + 1;
}

//////////////////////////////////////// Arrow Functions - Implicit Returns //////////////////////////////////////////

// An implicit return removes the need to use the return keyword. Return is implied! 
// To use an implicit return remove the return keyword and replace the curly brackets with parentheses.
// This only works when using arrow functions and when the function has only one expression.

const rollDie3 = () => (
    Math.floor(Math.random() * 6) + 1
)

// In fact, you can shorten this even further if you place the function on one line.
// This allows you to remove the second set of parentheses.

const add3 = (x, y) => x + y