// function makeMysteryFunc() {
//     const rand = Math.random();
//     if (rand > 0.5){
//         return function() {
//             console.log("Congrats, I am a good function!")
//             console.log("You win a million dollars!!")
//         }
//     } else {
//         return function() {
//             alert("You have been infected by a computer virus");
//             alert("Stop trying to close this window");
//             alert("Stop trying to close this window");
//             alert("Stop trying to close this window");
//             alert("Stop trying to close this window");
//         }
//     }
// }

// Creates a factory function
// You can assign the returned value to a variable and run the returned function seperately
function makeBetweenFunc(min, max) {
    return function(num){
        return num >= min && num <= max;
    }
}

let isChild = makeBetweenFunc(0, 10);

