const buttons = document.querySelectorAll('button');
const h1s = document.querySelectorAll('h1');

// for (let button of buttons) {
//     button.addEventListener('click', () => {
//         button.style.backgroundColor = makeRandomColor();
//         button.style.color = makeRandomColor();
//     })
// }

// for (let h1 of h1s) {
//     h1.addEventListener('click', () => {
//         h1.style.backgroundColor = makeRandomColor();
//         h1.style.color = makeRandomColor();
//     })
// }

// What if we want to colorize multiple items and want want to keep rewriting
// the same function? The this keyword!

// Let's make a new function (colorize) and pass it into our event listener

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r}, ${g}, ${b})`;
}

const colorize = function () {
    this.style.backgroundColor = makeRandomColor();
    this.style.color = makeRandomColor();
}

for (let button of buttons) {
    button.addEventListener('click', colorize)
}

for (let h1 of h1s) {
    h1.addEventListener('click', colorize)
}