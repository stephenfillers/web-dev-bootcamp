// // This returns a function, but it won't really do anything unless you assign the returned function to a variable
// // and then call it. So something like let mystery = makeMysteryFunction(); and then mystery(); will run the 
// // returned function. Pretty nifty! 
// function makeMysteryFunc() {
//     const rand = Math.random();
//     if (rand > 0.5){
//         return function() {
//             console.log("Congrats, I am a good function!")
//             console.log("You win a million dollars!")
//         }
//     } else {
//         return function() {
//             alert("You've been infected with a dirty virus.")
//             alert("Stop trying to close this window.")
//             alert("Stop trying to close this window.")
//             alert("Stop trying to close this window.")
//         }
//     }
// }

// let mystery = makeMysteryFunc();
// mystery();

// This is a factory function. First, use a variable to store a fuction with the preliminary values (e.g.,
// const isAdult = makeBetweenFunc(19, 64) ). From there, execute the variable ( isAdult() ) that's storing the
// makeBetweenFunc function to determine if a number falls between the set values. isAdult(19), for example, would return true
// and isAdult(7) would return false.

// // We can create something like this as needed, or we can ask a function to do so.
// function between(x) {
//     return x >= 50 && x <=100;
// }

// Here's our factory that achieves the same results
function makeBetweenFunc(min, max) {
    return function(num){
        return num >= min && num <= max;
    }
}