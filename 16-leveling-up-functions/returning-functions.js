// function makeMysteryFunc(){
//     const rand = Math.random();
//     if(rand > 0.5){
//         return function(){
//             console.log('Congrats, I am a good function!')
//             console.log('You win a million dollars!')
//         }
//     } else {
//         return function(){
//             alert('You have been infected by a computer virus')
//             alert('Stop trying to close this window!')
//             alert('Stop trying to close this window!')
//             alert('Stop trying to close this window!')
//             alert('Stop trying to close this window!')
//             alert('Stop trying to close this window!')
//         }

//     }
// }

// This is a factory function. First, use a variable to store a fuction with the preliminary values (e.g.,
// const isAdult = makeBetweenFunc(19, 64) ). From there, execute the variable ( isAdult() ) that's storing the
// makeBetweenFunc function to determine if a number falls between the set values. isAdult(19), for example, would return true
// and isAdult(7) would return false.
function makeBetweenFunc(min, max){
    return function(num){
        return num >= min && num <= max;
    }
}

// makeBetweenFunc(5, 10)

// function isBetween(num){
//     return num >= 50 && num <= 100;
// }