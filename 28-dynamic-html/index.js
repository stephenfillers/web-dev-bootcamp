const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/r/:sub', (req, res) => {
    const { sub } = req.params;
    res.render('subreddit', { sub });
});

app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'
    ]
    res.render('cats', { cats })
});

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { rand: num });
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});