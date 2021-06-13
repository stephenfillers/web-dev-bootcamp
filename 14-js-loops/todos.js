// Commence the initial prompt that starts the loop
let request = prompt('Hello! What would you like to do?');

// Create a sample array to start with
const todoList = ['Feed the dog', 'Water the plants'];

//Begin the while loop that the rest of the code exists in
while (request !== 'quit' && request !== 'q') {

    if (request === 'list') {
        console.log('****************')
        for (i = 0; i < todoList.length; i++) {
            console.log(`${i}: ${todoList[i]}`);
        }
        console.log('****************');
        request = prompt(`Way to use the 'list' command! What would you like to do now?`);
    } else if (request === 'add') {
        let newItem = prompt('What would you like to add?');
        todoList.push(newItem);
        console.log(`You added '${newItem}' to your to-do list.`);
        request = prompt(`Way to use the 'add' command! What would you like to do now?`);    
    } else if (request === 'remove'){
        let removedItem = parseInt(prompt('Which index would you like to remove?'));
        const removed = todoList.splice(removedItem, 1);
        console.log(`You removed '${removed[0]}'.`);
        request = prompt(`Way to use the 'remove' command! What would you like to do now?`)
    }
}

console.log('Okay. You quit the app.');