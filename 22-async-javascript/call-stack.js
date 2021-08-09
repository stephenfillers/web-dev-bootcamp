const multiply = (x, y) => x * y;

const square = n => multiply(n, n);

const isRightTriangle = (a, b, c) => (
    square(a) + square(b) === square(c)
);

console.log('done');
isRightTriangle(3, 4, 5);
console.log('done');