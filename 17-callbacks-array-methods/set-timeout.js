//// setTimeout performs a certain action after a set amount of time.
// console.log("Hello!!!")
// setTimeout(() => {
//     console.log("... are you still there?")
// }, 3000)


// setInterval repeats a certain action once per interval
const id = setInterval(() => {
    console.log(Math.random())
},3000)

// // clearInterval() cancels an interval of a given id or variable name
// clearInterval(id)