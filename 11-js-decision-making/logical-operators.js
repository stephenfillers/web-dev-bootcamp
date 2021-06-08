// const password = prompt("Enter your password");

// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log('Good password, dude!')
// } else {
//     console.log('Incorrect format. Sorry, try again');
// }

// const age = prompt("Enter your age");

// if (age >= 0 && age < 5 || age >= 65) {
//     console.log("You get in free");
// } else if (age >= 5 && age < 10) {
//     console.log("You get in for $10");
// } else if (age >= 10 && age < 65) {
//     console.log("$20");
// } else {
//     console.log("Invalid age")
// }

// let firstName = prompt("enter your first name");

// if (!firstName) {
//     firstName = prompt("Try again");
// }

// const age = prompt("Enter your age");

// if (!(age >= 0 && age < 5 || age >= 65)) {
//     console.log("You ain't getting in free.");
// }

const day = parseInt(prompt("Enter in the day!"));

switch(day) {
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
    case 7:
        console.log("Weekend");
        break;
    
    default:
        console.log("I don't know that");
}