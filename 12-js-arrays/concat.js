const cats = ['blue', 'kitty'];
const dogs = ['rusty', 'wyatt'];

// .concat concatenates multiple arrays together
let comboParty = cats.concat(dogs);

// .includes returns true or false depending on whether an array contains a selected item
console.log(cats.includes('blue'));
console.log(cats.includes('red'));

// .indexOf determines the index within an array. (-1 means an item doesn't exist)
console.log(dogs.indexOf('rusty'));
console.log(dogs.indexOf('Rusty')); // === -1 because Rusty (capital 'r') doesn't exist in the dogs array

// .reverse reverses an array
console.log(comboParty.reverse());