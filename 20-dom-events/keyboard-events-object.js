// document.querySelector('button').addEventListener('click', event => {
//     alert('CLICK')
//     console.log(event);
// })

const input = document.querySelector('input');
const typeWatch = document.querySelector('h1');

input.addEventListener('keydown', event => {
    console.log(event.key);
})

input.addEventListener('keyup', event => {
    console.log(event.code);
})

window.addEventListener('keydown', event => {
    switch(event.code) {
        case 'ArrowUp' :
            console.log('Arrow Up');
            break;
        case 'ArrowDown' :
            console.log('Arrow Down');
            break;
        case 'ArrowLeft' :
            console.log('Arrow Left');
            break;
        case 'ArrowRight' :
            console.log('Arrow Right');
            break; 
        default:
            console.log("I'm not listening for that key. Sorry!")
    }
})