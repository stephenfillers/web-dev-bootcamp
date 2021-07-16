// async function hello() {

// }
// Async arrow function
// const sing = async () => {
//     throw "8919asdf"
//     return 'LA LA LA LA'
// }

// sing()
//     .then((data) => {
//         console.log("Promise resolved with:", data);
//     })
//     .catch((error) => {
//         console.log("We got an error, chief:", error);
//     })


const login = async (username, password) => {
    if(!username || !password) throw "Missing credentials"
    if(password === 'corgifeetarecute') return "Welcome!"
    throw "Invalid password"
}

login('userbro', 'corgifeetarecute')
    .then(msg => {
        console.log("Logged In!");
        console.log(msg);
    })
    .catch(err => {
        console.log("Sorry, try again");
        console.log(err);
    })