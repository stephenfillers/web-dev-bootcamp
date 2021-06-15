// // Scope refers to variable visibility. Variables defined within a function cannot be called outside of this function.
// function collectEggs() {
//     let totalEggs = 6;
//     console.log(totalEggs);
// }

// This will return an error because I'm calling for totalEggs from outside of the function
// console.log(totalEggs);

// In general, variables are defined within a function, though they can be defined outside of it (this is very uncommon)
// let totalEggs = 0;
// function collectEggs() {
//     totalEggs = 6;
// }
// // Interestingly, the totalEggs variable isn't updated until the function is run. Check this out:
// console.log(totalEggs); // returns 0
// collectEggs()
// console.log(totalEggs); // returns 6

// // Examples of scope
// let bird = 'Scarlet Macaw';
// function birdWatch() {
//     let bird = 'Great Blue Heron';
//     console.log(bird); // returns 'Great Blue Heron' because the closest instance of 'bird' is found within this function
// }
// birdWatch();
// console.log(bird); // returns 'Scarlet Macaw' because 'Great Blue Heron' is isolated within the birdWatch() function

// // Block scope
// let radius = 8;
// if (radius > 0){
//     const PI = 3.14159;
//     let msg = 'HIII!';
// }

// console.log(radius);
// console.log(PI); // This returns an error because the PI variable is found within a block
// console.log(msg); // This returns an error because the msg variable is found within a block
// // A block is initiated with the curly brackets {}

// for(let i = 0; i < 5; i++) {
//     let msg = 'Hello world!'
//     console.log(msg);
// }
// console.log(msg);

// Lexical Scope. Let's nest some functions!
// A lexical scope, or inner function, has access to parent functions
function bankRobbery() {
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Batwoman']
    function cryForHelp() {
        function inner() {
            for(let hero of heroes){
                console.log(`PLEASE HELP US, ${hero.toUpperCase()}`)
            }
        }  
        inner();  
    }
    cryForHelp();
}
bankRobbery();

// // Fun little dice roller function
// function roll(n) {
//     let result = Math.floor(Math.random() * n) + 1;
//     return result;
// }