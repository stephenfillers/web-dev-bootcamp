const franc = require('franc');
const langs = require('langs');
const colors = require('colors');

const input = process.argv.slice(2).join(' ');
const langCode = (franc(input));
const language = langs.where('3', langCode);

if (!language) {
    console.log(`I'm not sure about that language. Please try again with more sample text.`.red)
} else {
    console.log(`You wrote: "${input.magenta}"`)
    console.log(`Let me think about that.`.green);
    setTimeout(() => {
        console.log(`I think this language is ${language.name}.`.green);
    }, 3500);
};