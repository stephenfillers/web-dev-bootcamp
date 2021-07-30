const button = document.querySelector('#changeColor');
const container = document.querySelector('#container')

button.addEventListener('click', function(event) {
    container.style.backgroundColor = makeRandomColor();
    event.stopPropagation(); // the stopPropagation prevents event bubbling
})

container.addEventListener('click', function(event) {
    container.classList.toggle('hide');
})

const makeRandomColor = () => {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r}, ${g}, ${b})`;
}