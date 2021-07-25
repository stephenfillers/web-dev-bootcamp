const express = require('express')
const app = express()
const PORT = 3000;
const IP = '172.26.92.146';

// app.use((req, res) => { // Most often you would use req and res as the callback parameters
//     // res.send("Hello world! Look at me makin' a cool Express server.")
//     res.send('<h1>This is my webpage!</h1>')
// });

app.get('/', (req, res) => {
    res.send("Welcome to the home page!");
});

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit.</h1>`);
});

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit.</h1>`);
});

app.get('/cats', (req, res) => {
    res.send("Meow");
});

app.post('/cats', (req, res) => {
    res.send("Post request to /cats successful.")
})

app.get('/dogs', (req, res) => {
    res.send("Woof");
});

app.get('/search', (req, res) => {
    const { q } = req.query;
    if(!q) {
        res.send("Nothing found if nothing searched.")
    }
    res.send(`<h1>Including search results for ${q}</h1>`)
});

app.get('*', (req, res) => {
    res.send("That page doesn't exist. Sorry, brah.");
});

app.listen(PORT, () => {
    console.log(`Example app listening at ${IP}:${PORT}`);
});