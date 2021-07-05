// // setTimeout requires a callback function and then a time in milliseconds.
// console.log("Hello!")
// setTimeout(() => {
//     console.log('Are you still there?')
// }, 3000)

// // setInterval repeats a callback function at a set interval, also in milliseconds.
// setInterval(() =>{
//     let result = Math.floor(Math.random() * 20) + 1;
//     console.log(result);
//     if (result === 10){
//         console.log("You're the big winner! Congrats!")
//     }
// }, 500)

// But how do we stop an interval once it's running? clearInterval!
const id = setInterval(() =>{
    let result = Math.floor(Math.random() * 20) + 1;
    console.log(result);
    if (result === 10){
        console.log("You're the big winner! Congrats!")
        clearInterval(id)
    }
}, 500)