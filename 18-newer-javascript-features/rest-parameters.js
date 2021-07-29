// rest is written as three dots '...' similar to spread. Rest allows a function to accept multiple parameters
// without having to account for each one individually.
function sum(...nums) {
    return nums.reduce((total, el) => total + el);
}

console.log(sum(1, 4, 5, 6, 7, 23, 4, 75443, 423, 456246, 2354, 421));

function raceResults(gold, silver, ...everyoneElse) {
    const allExceptLast = everyoneElse.slice(0, everyoneElse.length - 1).join(', ');
    const last = everyoneElse.slice(everyoneElse.length - 1);

    console.log(`The gold medal goes to ${gold}`);
    console.log(`The silver medal goes to ${silver}`);
    console.log(`And thanks to ${allExceptLast}, and ${last} for your participation!`);
}

raceResults('Stephen', 'Timmy', 'Evan', 'Briana', 'Samoa', 'Debbie', 'Jeff', 'Andy', 'Todd', 'Connie', 'Barbie', 'Tanna');