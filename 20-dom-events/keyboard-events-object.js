// document.querySelector('button').addEventListener('click', function(event) {
//     console.log(event);
// })

// const input = document.querySelector('input');

// input.addEventListener('keydown', function(event) {
//     console.log(event.key)
//     console.log(event.code)
// })

// input.addEventListener('keyup', function() {
//     console.log("KEYUP")
// })

window.addEventListener('keydown', function(event) {
    switch(event.code) {
        case 'KeyW':
            console.log("W - Up")
            break;
        case 'KeyA':
            console.log("A - Left")
            break;
        case 'KeyS':
            console.log("S - Down")
            break;
        case 'KeyD':
            console.log("D - Right")
            break;
        default:
            console.log("Not a valid movement key.")   
    }
})