const input = document.querySelector('input');
const h1 = document.querySelector('h1');

input.addEventListener('change', (e) => {
    console.log(input.value);
    h1.textContent = input.value;
})

// input.addEventListener('input', (e) => {
//     console.log(input.value);
//     h1.textContent = input.value;
// })