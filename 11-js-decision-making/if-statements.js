// let random = Math.random();
// if (random > 0.5) {
//     console.log("Your number is greater than 0.5!");
// } else {
//     console.log("Your number is less than 0.5")
// }
// console.log(random);

// const dayOfWeek = prompt("Enter a day").toLowerCase();
// if (dayOfWeek === 'monday') {
//     console.log("Ugh, I hate Mondays!");
// } else if (dayOfWeek === 'saturday') {
//     console.log("Yay, I love Saturdays!");
// } else if (dayOfWeek === 'friday') {
//     console.log("Fridays are decent, especially after work.");
// } else {
//     console.log("Meh");
// }

// const age = 80;
// if (age < 5) {
//     console.log("You are a baby. You get in for free");
// } else if (age < 10) {
//     console.log("You are child. You pay $10");
// } else if (age < 65) {
//     console.log("You are an adult. You pay $20");
// } else {
//     console.log("You are a senior. You pay $10")
// }

const password = prompt("Please enter a new password");

//Password must be 6+ characters
if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log('Valid password!');
    } else {
        console.log('Your password cannot contain a space.');
    }
} else {
    console.log('Password too short!');
}