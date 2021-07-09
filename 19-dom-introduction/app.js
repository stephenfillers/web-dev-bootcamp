///////////////////////////// Select an element by its ID ///////////////////////////////

// document.getElementById('idName');

//////////////////////////// Select elements by its tag name //////////////////////////////

// const allImages = document.getElementsByTagName('img');
// for (let images of allImages) {
//     images.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg"
// }

//////////////////////////// Select elements by its class name //////////////////////////////

// const squareImages = document.getElementsByClassName('square');
// for (let img of squareImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg'
// }

//////////////////////////////// Practice ////////////////////////////////

// const tocHeading = document.getElementById('mw-toc-heading')
// tocHeading.innerHTML = 'NEW HEADER'

/////////////// There's a better way to select, but Colt thought we should learn the old way first! Woohoo! /////////////////

// document.querySelector('img'); // without 'all', this matches only the first image
// document.querySelector('a[title="Java"]'); // selects an anchor tag titled "Java"
// document.querySelectorAll('p'); // with 'all', this matches all 'p' tags

// const links = document.querySelectorAll('p a') // selects all anchor tags found within a paragraph tag
// for (let link of links) {
//     console.log(link.href);
// }

/////////////////////////// JavaScript Manipulation //////////////////////////////////

// const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I am a link!!!'; // innerText is a good choice when HTML tags don't matter
// }

// const h1 = document.querySelector('h1');
// h1.innerHTML = '<i>hello world!</i>' // innerHTML is required here since we're adding an <i></i> tag.

// // You don't always need to set an element equal to something. You can add to it!
// const h1 = document.querySelector('h1');
// h1.innerHTML += '<sup>hello world!</sup>' // innerHTML is required here since we're adding an <i></i> tag.

///////////////////////////// Attributes //////////////////////////////

// // getAttribute and setAttribute
// const firstLink = document.querySelector('a')
// firstLink.getAttribute('href')
// firstLink.setAttribute('href', 'https://www.google.com')


////////////////////////// Changing Styles /////////////////////////////

// const h1 = document.querySelector('h1');
// h1.style.fontSize = '36px'
// h1.style.color = 'green'

// const links = document.querySelectorAll('a');
// for (let link of links) {
//     link.style.color = 'magenta';
//     link.style.textDecorationColor = 'cyan';
//     link.style.textDecorationStyle = 'wavy';
// }

// //////////////////////////// classList /////////////////////////////

// const h2 = document.querySelector('h2');

// h2.classList // displays which classes are assigned
// h2.classList.add('border') // adds a class
// h2.classList.toggle('purple') // toggles a class

// /////////////////// Traversing parent/child/sibling //////////////////

// const firstBold = document.querySelector('b')
// firstBold.parentElement // selects parent

// const paragraph = firstBold.parentElement
// paragraph.children // displays childen of the selected element

// const squareImg = document.querySelector('.square')
// squareImg.nextElementSibling
// squareImg.previousElementSibling

/////////////////// Append & AppendChild //////////////////

// const newImg = document.createElement('img')
// newImg.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Male_Silkie.png/460px-Male_Silkie.png'
// newImg.classList.add('square')
// document.body.appendChild(newImg)

// const newH3 = document.createElement('h3')
// newH3.innerText = 'I am new!'
// document.body.appendChild(newH3)

// const p = document.querySelector('p')
// p.append('I am new text, yayyyy! ', 'This adds multiple pieces of content!!!')

// const newB = document.createElement('b')
// newB.append('Hi! ')
// p.prepend(newB)

// const h2 = document.createElement('h2')
// h2.append('Are adorable chickens')
// const h1 = document.querySelector('h1')

// h1.insertAdjacentElement('afterend', h2)

/////////////////// Removing Elements //////////////////

// const ul = document.querySelector('ul')
// ul.removeChild(firstLi)

const firstLi = document.querySelector('li')
firstLi.remove()