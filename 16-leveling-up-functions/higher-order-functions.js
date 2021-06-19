// function callTwice(func){
//     func();
//     func();
// }

// Functions can work with other functions too!
// In this case, we load the rollDie function into the callTenTimes function
// resulting in our rollDie function being called 10 times.
function callTenTimes(func){
    for(i = 0; i < 10; i++){
        func();
    }
}

function rollDie(n) {
    const roll = Math.floor(Math.random() * 20) + 1;
    console.log(roll);
}

// callTwice(rollDie);
callTenTimes(rollDie);