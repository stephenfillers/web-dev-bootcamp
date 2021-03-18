// let input = prompt('What would you like to do?')
// const todos = ['Collect chicken eggs', 'Clean litter box'];

// while (input !== 'quit' && input !== 'q') {
//     if (input === 'list') {
//         console.log('*************')
//         for (i = 0; i < todos.length; i++) {
//             console.log(`${i}: ${todos[i]}`)
//         }
//         console.log('*************')
//     } else if (input === 'new') {
//         const newTodo = prompt("Okay, what is the new todo?");
//         todos.push(newTodo);
//         console.log(`${newTodo} added to the list.`)
//     } else if (input === "delete") {
//         const index = parseInt(prompt('Okay, enter an index to delete.'));
//         if(!Number.isNaN(index)) {
//             const deleted = todos.splice(index, 1);
//             console.log(`You deleted the "${deleted[0]}" todo item.`);
//         } else {
//             console.log('Please enter in a valid index.')
//         } 
//     }
//     input = prompt('What would you like to do?')
// }
// console.log('You quit the app')