const mongoose =  require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection open!")
    })
    .catch(err => {
        console.log("Sorry, I've encountered an error.");
        console.log(err);
    })

    const productSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            maxLength: 20
        },
        price: {
            type: Number,
            required: true,
            min: 0
        },
        onSale: {
            type: Boolean,
            default: false
        },
        categories: [String],
        qty: {
            online: {
                type: Number,
                default: 0
            },
            inStore: {
                type: Number,
                default: 0
            }
        },
        size: {
            type: String,
            enum: ['S', 'M', 'L']
        }
    });

    productSchema.methods.greet = function () {
        console.log("Hello!!!");
        console.log(`- from ${this.name}`)
    }

    const Product = mongoose.model('product', productSchema);

    const findProduct = async () => {
        const foundProduct = await Product.findOne({ name: 'Bike Helmet' })
        foundProduct.greet();
    }

    // const bike = new Product({ name: 'Tire Pump', price: 20, categories: ['Cycling'] });
    // bike.save()
    // .then(data => {
    //     console.log("It worked!");
    //     console.log(data);
    // })
    // .catch(err => {
    //     console.log("Oh no, error!");
    //     console.log(err);
    // })