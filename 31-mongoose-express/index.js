const express = require('express');
const app = express();
const path = require('path');
const mongoose =  require('mongoose');

const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongo connection open!")
    })
    .catch(err => {
        console.log("Sorry, I've encountered a Mongo error.");
        console.log(err);
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/products', async (req, res) => {
    const products = await Product.find({})
    console.log(products);
    res.render('products/index', { products });
})

app.listen(3000, () => {
    console.log("App is listening on port 3000!")
})