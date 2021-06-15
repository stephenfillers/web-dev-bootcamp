// Try/catch allows you to test code that you suspect may be problematic.
// This doesn't break your code like an actual error would.

// try {
//     hello.toUpperCase(); // hello doesn't exist and .toUpperCase can't be used on it.
// } catch {
//     console.log("Error!!!");
// }

// console.log("After");

function yell (msg){
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch {
        console.log('Please enter a valid string');
    }
}