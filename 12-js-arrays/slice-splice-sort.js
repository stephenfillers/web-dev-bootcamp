let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// .slice - returns a portion of the array depending on the selected starting index. Adding no arguments returns a full copy of the original array.
colors.slice(2); // returns 'yellow', 'green', 'blue', 'indigo, 'violet'
colors.slice(2, 4); // returns 'yellow', 'green' (starts at 2, but stops before reaching the 4th index)
colors.slice(-3); // returns the last three items in the array

// .splice - splices a selected item (based on its index) within an existing array - .splice(itemsIndex, deleteCount, itemToAdd)
//colors.splice(5, 1) // removes indigo from the array
colors.splice(1, 0, 'red-orange'); // adds 'red-orange' at index 1 and deletes nothing
colors.splice(4, 0, 'yellow-green', 'forest-green'); // adds the new colors at index 4 and deletes nothing
colors.splice(2, 2, 'Deleted!!'); // Deletes two items starting at index two, and replaces them with "Deleted!!"

// .sort - sorts array items by their utf-16 codes, not by expected values
let scores = [1, 70, 100, 2500, 9, -12, 0, 34];
scores.sort();