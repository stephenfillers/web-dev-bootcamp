const input = document.querySelector('input');
const h1 = document.querySelector('h1');
// input.addEventListener('change', function(event) {
//     console.log("hello") // The 'change' listener only activates when you blur, a.k.a (defocus), the input
// })

input.addEventListener('input', function(event) {
    h1.innerText = input.value
})