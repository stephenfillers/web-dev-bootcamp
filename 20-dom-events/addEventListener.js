const btn3 = document.querySelector('#v3');

btn3.addEventListener('mouseup', () => {
    alert("It's working. Nice job!")
})

function twist() {
    console.log("TWIST!");
}
function shout() {
    console.log("SHOUT!");
}

const tasButton = document.querySelector('#tas');

// Why is addEventListener the better option? See below:
// tasButton.onclick = twist
// tasButton.onclick = shout

tasButton.addEventListener('click', twist, { once: true }) // the 'once' option is an object that only allows an event to be run once.
tasButton.addEventListener('click', shout, { once: true })