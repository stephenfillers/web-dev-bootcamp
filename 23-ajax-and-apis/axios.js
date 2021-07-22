// let data = axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(response => {
//         console.log(response.data.ticker.price);
//     })
//     .catch(error => {
//         console.log('There was an error', error);
//     })

// const fetchBitcoinPrice = async () => {
//     try {
//         const reponse = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//         console.log(reponse.data.ticker.price)
//     } catch(error) {
//         console.log("ERROR:", error)
//     } 
// }

// How to set headers with Axios //
const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const getDadJoke = async () => {
    try {
        const config = { headers:{ Accept: 'application/json' } };
        const response = await axios.get('https://icanhazdadjoke.com/', config);
        return response.data.joke;
    } catch(error) {
        return "There was an error. Try again later."
    }
}

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLi = document.createElement('li');
    newLi.append(jokeText);
    jokes.append(newLi);
}

button.addEventListener('click', addNewJoke);