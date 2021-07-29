const colorH1 = document.querySelector('#colorH1');
const colorButton = document.querySelector('#colorButton');

colorButton.addEventListener('click', () => {
    const newColor = makeRandomColor();
    colorH1.textContent = newColor;
    document.body.style.backgroundColor = newColor;
})

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    if (r + b + g < 150) {
        colorH1.style.color = 'white';
    } else {
        colorH1.style.color = 'black';
    }
    return `rgb(${r}, ${g}, ${b})`;
}