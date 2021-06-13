// function greet(firstName) {
//     console.log(`Hey there, ${firstName}!`);
// }

// function rant(message){
//     console.log(message.toUpperCase());
//     console.log(message.toUpperCase());
//     console.log(message.toUpperCase());
// }

// rant("I hate beets");

// Functions with multiple arguments
function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.`)
}

function repeat(str, numTimes) {
    let result = '';
    for (i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

