// let random = Math.floor(Math.random() * 2) + 1;

// if (random > 1) {
//     console.log("Heads");
// } else {
//     console.log("Tails");
// }
// console.log(random);

// // Food Picker
// let option1 = "Chicken";
// let option2 = "Burgers";
// let option3 = "Pasta";
// let option4 = "DoorDash";
// let choice = Math.floor(Math.random() * 4) + 1;

// if (choice === 1) {
//     console.log(option1)
// } else if (choice === 2) {
//     console.log(option2) 
// } else if (choice === 3) {
//     console.log(option3)
// } else {
//     console.log(option4)
// }

// const dayOfWeek = prompt("Enter a day of the week").toLowerCase();

// if (dayOfWeek === 'monday') {
//     console.log("Ugh, I hate Mondays.");
// } else if (dayOfWeek === 'saturday') {
//     console.log("Yay, I love Saturdays!");
// } else if (dayOfWeek === 'friday') {
//     console.log("Fridays are decent, especially after work!");
// } else {
//     console.log('Meh');
// }

// const age = 3;

// if (age < 5) {
//     console.log("You are a baby child. You get in for free.")
// } else if (age < 10) {
//     console.log("You are a child. You pay $10.")
// } else if (age < 65) {
//     console.log("You are an adult. You pay $20.")
// } else {
//     console.log("You are a senior. YOu pay $10.")
// }

// Password must be 6+ characters
// Password cannot include space

const password = prompt("Please enter a new password");

if (password.length  >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log("Valid Password")
    } else {
        console.log("Password cannot contain spaces.")
    }
} else {
    console.log('Password is too short. Must be 6 or more characters')
}