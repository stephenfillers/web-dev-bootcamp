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

for (let i = 0; i <= 1000; i++) {
    console.log(i);
    if (i === 100) {
        break;
    }
}