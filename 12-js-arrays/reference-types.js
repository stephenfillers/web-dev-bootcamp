// True - JavaScript evaluates this to true because the two strings are identical 
console.log('hi' === 'hi');

// False - JavaScript evaluates this to false because JavaScript isn't comparing what is in the arrays, rather it compares the references
// in memory. Although the two arrays appear identical, they're assigned different references in memory.
console.log(['hi'] === ['hi']);