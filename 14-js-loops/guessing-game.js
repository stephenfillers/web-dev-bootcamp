// Defines the ceiling that cannot be exceeded.
let maximum = parseInt(prompt("Welcome to my simple random number guessing game! To start playing, choose the highest number I should use when coming up with your random number. If you choose 20, your random number will be somewhere between 1 and 20. The higher you set this number, the harder the game will be!"));

// Requires the user to submit a valid number. If maximum is anything other than a number, 
// parseInt() will return maximum as NaN, which is inherently falsey. This allows this check to run.
while (!maximum) {
    maximum = parseInt(prompt("Oops! You must choose a valid number to proceed."));
}

// We use maximum and Math.random() to determine a random value that falls somewhere beneath our ceiling. 
const chosenNum = Math.floor(Math.random() * maximum) + 1;

// We ask the user to start the game by making their first guess.
let guess = prompt(`${maximum}, huh? Good choice! Now try to guess the random number I chose for you. Just remember, it will never be higher than ${maximum}.`);

// If the player guesses incorrectly, this loop will help point them in the right direction.
// attempts will track the number of attempts the player took to guess the random number
let attempts = 1;
while (parseInt(guess) !== chosenNum) {
    attempts++;
    if (guess.toLowerCase() === 'quit' || guess === 'q') break;
    if (guess.toLowerCase() === 'reminder') {
        guess = prompt(`Forgot already? Your maximum number was ${maximum} and the number I chose will never go above it.`);
    } else if (guess > chosenNum) {
        guess = prompt(`${guess} is too high. Try again.`)
    } else {
        guess = prompt(`${guess} is too low. Try again.`)
    }
}

// Return a response for the player winning or quitting the game.
if (parseInt(guess) === chosenNum && attempts === 1) {
    console.log(`Wow! You guessed it on your first try. You must be some kind of computer wizard!`)
    console.log("Refresh the page to play again if you're feeling up for it.")
} else if (parseInt(guess) === chosenNum) {
    console.log(`You win! It took you ${attempts} attempts to guess the random number.`)
    console.log("Refresh the page to play again!")
} else {
    console.log("You quit the game. Try again soon!")
}