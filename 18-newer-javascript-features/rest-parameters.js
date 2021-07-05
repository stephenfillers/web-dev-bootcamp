// rest is written as three dots '...' similar to spread. Rest allows a function to accept multiple parameters
// without having to account for each one individually.
function sum(...nums) {
    return nums.reduce((total, el) => total + el)
}

let total = sum(1,4,5,6,7,23,4,75443,423,456246,2354,421)

function raceResults(gold, silver, ...everyoneElse){
    console.log(`Gold medal goes to: ${gold}`)
    console.log(`Silver medal goes to: ${silver}`)
    console.log(`And thanks to everyone else: ${everyoneElse}`)
}