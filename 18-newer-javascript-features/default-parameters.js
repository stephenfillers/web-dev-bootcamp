// Functions can certainly operate on a provided parameter, but what if a paremeter isn't given? We can use
// default parameters to work around this. Set your parameter as normal, but also include '= "default value"'
const rollDie = (numSides = 6) => ( // 6 is our default parameter
    Math.floor(Math.random() * numSides) + 1
)

function greet(person = 'dude', msg = 'Screw You') {
    console.log(`${msg}, ${person}!`)
} 