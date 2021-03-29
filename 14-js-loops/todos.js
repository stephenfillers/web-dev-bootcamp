let input = prompt("What would you like to do? list, add, remove, and quit are all acceptable commands.");
const todos = ["Clean the house", "Water the plants"];

while (input !== "quit" && input !== "q") {
    if (input === "list" || input === "l") {
        console.log("*******************")
        for (i = 0; i < todos.length; i++) {
            console.log(`${[i]}: ${todos[i]}`);
        }
        console.log("*******************")
    } else if (input === 'add' || input === 'a') {
        const newTodo = prompt("Enter in your new to-do item.");
        todos.push(newTodo);
        console.log(`You added "${newTodo}" to your to-do list.`)
    } else if (input === 'remove' || input === 'r') {
        const index = parseInt(prompt("Which item should we remove?"));
        if (!Number.isNaN(index)) {
            const removed = todos.splice(index, 1);
            console.log(`The "${removed}" to-do has been removed.`)
        } else {
            console.log("Please enter a valid index. You can use the 'list' command for a list of each item and its index.")
        }
    } else if (input === 'clear' || input === 'c') {
        console.clear();
    }
    input = prompt("What else would you like to do?");
}
console.log("Thanks for using our to-do list! Now closing the program.");