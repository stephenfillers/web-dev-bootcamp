// const password = prompt("Enter your password");
// if(password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log("Valid Password. Great job");
// } else {
//     console.log("Incorrect password");
// }

// const age = 18;
// if (age >= 0 && age < 5 || age >= 65) {
//     console.log("Free");
// } else if (age >= 5 && age < 10) {
//     console.log("$10");
// } else if (age >= 10 && age < 65) {
//     console.log("$20");
// } else {
//     console.log("Invalid Age, sucka.");
// }

// const firstName = prompt("Enter your first name");
// if(!firstName) {
//     firstName = prompt("Try again!");
// }

const day = 40;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("I don't know that.");
}