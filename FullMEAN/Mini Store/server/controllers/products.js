let Product = require('../models/product.js');

module.exports = {
    index(req, res) {
        Product.find().sort('-_id').exec( (err, products) => {
            if(err)  console.log(`Error getting products: ${err}`);
            else  res.json(products);
        })
    },
    recent(req, res) {
        Product.find().sort('-_id').limit(5).exec( (err, products) => {
            if(err)  console.log(`Error getting recent products: ${err}`);
            else  res.json(products);
        })
    },
    create(req, res) {
        Product.create(req.body, (err, product) => {
            if(err) {
                console.log(`Error adding product: ${err}`);
                res.json({error: true});
            }
            else  res.json(product);
        })
    },
    update(req, res) {
        Product.update({ _id: req.params.id }, req.body, (err) => {
            if(err)  console.log(`Error deleting product: ${err}`);
            else  res.json(true);
        })
    },
    delete(req, res) {
        Product.findByIdAndRemove(req.params.id, (err) => {
            if(err)  console.log(`Error deleting product: ${err}`);
            else  res.json(true);
        })
    }
}
