let customers = require('../controllers/customers'),
    products = require('../controllers/products'),
    orders = require('../controllers/orders');

module.exports = (app) => {
    app.get('/customers', customers.index);
    app.get('/customers/recent', customers.recent);
    app.post('/customers', customers.create);
    app.delete('/customers/:id', customers.delete);

    app.get('/products', products.index);
    app.get('/products/recent', products.recent);
    app.post('/products', products.create);
    app.put('/products/:id', products.update);
    app.delete('/products/:id', products.delete);

    app.get('/orders', orders.index);
    app.get('/orders/recent', orders.recent);
    app.post('/orders', orders.create);
    app.delete('/orders/:id', orders.delete);
    app.delete('/orders/product/:id', orders.delRelated);
}
