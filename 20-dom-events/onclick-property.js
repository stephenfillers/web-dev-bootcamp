const btn = document.querySelector('#v2');
const bodyBg = document.querySelector('body');
const text = document.querySelector('body');

btn.onclick = () => {
    bodyBg.classList.toggle('bodyBlack');
    text.classList.toggle('invertFonts');
    console.log('clicked!');
}

function scream() {
    console.log("AAAAAAHHHHH")
    console.log("STOP TOUCHING ME")
}

const repeat = (num, func) => {
    for (let i = 0; i < num; i++) {
        func();
    }
}

btn.onmouseenter = scream;