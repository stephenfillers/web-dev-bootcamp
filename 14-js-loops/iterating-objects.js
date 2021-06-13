const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}

// Objects are not considered iterables. How do we loop over them? For in loops! (Not to be confused with for of loops)
// for (let person in testScores) {
//     console.log(`${person[0].toUpperCase() + person.slice(1)} scored a ${testScores[person]}`);
// }

// Another, newer method of iterating over objects (this returns an array)
Object.keys(testScores);
Object.values(testScores);

// Return keys and values in the same command
Object.entries(testScores);

// Nest this within a for of loop
// Lets find the average of the testScores object
let total = 0;
// Let's create an array from testScores that we can use in our for of loop
let scores = Object.values(testScores);

for (let score of scores) {
    total += score; // totaling up each score in the scores array
}

console.log(total / scores.length) // averaging the total by dividing it by the array's length