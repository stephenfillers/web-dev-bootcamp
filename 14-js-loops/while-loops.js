// let count = 0;
// while (count < 10){
//     count++;
//     console.log(count);
// }

// while (!gameOver){
//     //player1 move
//     //player2 move
// }

// console.log("Hello world!")
// const SECRET = "BabyHippo";

// let guess = prompt("Enter your password");
// while (guess !== SECRET) {
//     guess = prompt("Enter your password");
// }
// console.log("Congrats, you got the secret!")

// lets learn the break keyword
let input = prompt('Hey, say something')

while (true) {
    input = prompt(input);
    if (input.toLowerCase() === 'stop copying me') {
        break;
    }
}
console.log('Okay, geez.')
