// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const rand = Math.random();
//         setTimeout(() => {
//             if (rand < 0.7) {
//                 resolve('Your fake data here.');
//             }
//             reject('No data was found.'); 
//         }, 1000)
//     })
// }

// fakeRequest('dogs.com/1')
// .then((data) => {
//     console.log(`Done with request. ${data}`);
// })
// .catch((err) => {
//     console.log(`Failed. ${err}`)
// })

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayedColorChange('red', 1000)
.then(() => delayedColorChange('orange', 1000))
.then(() => delayedColorChange('yellow', 1000))
.then(() => delayedColorChange('green', 1000))
.then(() => delayedColorChange('blue', 1000))
.then(() => delayedColorChange('indigo', 1000))
.then(() => delayedColorChange('violet', 1000))