// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 0; i <= 20; i += 2) {
//     console.log(i);
// }

// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i);
// }

// let animals = ["lions", "tigers", "bears"]
// for (let i = 0; i < animals.length; i++) {
//     console.log(i, animals[i]);
// }

// for (let i = animals.length - 1; i >=0; i--) {
//     console.log(i, animals[i]);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`i is: ${i}`)
//     for (let j = 1; j < 4; j++) {
//         console.log(`        j is: ${j}`)
//     }
// }

// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]

// for (let i = 0; i < seatingChart.length; i++) {
//     console.log(`Row #${i + 1}`)
//     for (let j = 0; j < seatingChart[i].length; j++) {
//         console.log(seatingChart[i][j]);
//     }
// }

// for (let studentRow of seatingChart) {
//     console.log(studentRow);
//     for (let students of studentRow) {
//         console.log(students);
//     }
// }

// let i = 0;
// while (i < 10) {
//     i++;
//     console.log(i);
// }

// const SECRET = "BabyHippo";

// let guess = prompt("enter the secret code...");
// while (guess !== SECRET) {
//     guess = prompt("enter the secret code...");
// }
// console.log("Congrats, you got the secret!")

// let input = prompt("Hey, say something!")
// while(true) {
//     input = prompt(input);
//     if(input.toLowerCase() === "stop copying me") {
//         break;
//     }
// }
// console.log("Okay, you win!")

// for (let i = 0; i <= 1000; i++) {
//     console.log(i);
//     if (i === 100) {
//         break;
//     }
// }

// const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'mildyinteresting']

// for (let i = 0; i < subreddits.length; i++) {
//     console.log(`Visit reddit.com/r/${subreddits[i]}`)
// }

// for (let sub of subreddits) {
//     console.log(sub);
// }

// for (let char of "hello world") {
//     console.log(char);
// }

const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadio: 83,
    elvira:  97,
    diedre: 81,
    vonnie: 60
}

// for (let person in testScores) {
//     console.log(`${person} scored ${testScores[person]}`);
// }

let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
    total += score;
}
console.log(total / scores.length)