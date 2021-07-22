// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
// .then(response => {
//     console.log("Response, Waiting to Parse...", res)
//     return response.json()
// })
// .then(data => {
//     console.log("Data Parsed", data)
//     console.log(data.ticker.price)
// })
// .catch(err => {
//     console.log("Oh no, an error!", err)
// })

const fetchBitcoinPrice = async () => {
    try {
        const response = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
        const data = await response.json();
        console.log(data.ticker.price);
    } catch(error) {
        console.log("Something went wrong.", error)
    }
}