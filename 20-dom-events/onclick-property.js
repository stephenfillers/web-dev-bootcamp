const btn = document.querySelector('#v2');
const bodyBg = document.querySelector('body');
const text = document.querySelector('body');

btn.onclick = function() {
    bodyBg.classList.toggle('bodyBlack')
    text.classList.toggle('invertFonts')
}

function scream() {
    console.log("AAAAAAHHHHH")
    console.log("STOP TOUCHING ME")
    bodyBg.classList.toggle('bodyBlack')
    text.classList.toggle('invertFonts')
}

btn.onmouseenter = scream;