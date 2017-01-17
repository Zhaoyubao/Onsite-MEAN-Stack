let Order = require('../models/order.js');

module.exports = {
    index(req, res) {
        Order.find().populate('_customer _product').sort('-_id').exec( (err, orders) => {
            if(err)  console.log(`Error getting orders: ${err}`);
            else  res.json(orders);
        })
    },
    recent(req, res) {
        Order.find().populate('_customer _product').sort('-_id').limit(3).exec( (err, orders) => {
            if(err)  console.log(`Error getting recent orders: ${err}`);
            else  res.json(orders);
        })
    },
    create(req, res) {
        Order.create(req.body, (err, order) => {
            if(err) {
                console.log(`Error adding order: ${err}`);
                res.json({error: true});
            }
            else  res.json(order);
        })
    },
    delete(req, res) {
        Order.findByIdAndRemove(req.params.id, (err) => {
            if(err)  console.log(`Error deleting order: ${err}`);
            else  res.json(true);
        })
    },
    delRelated(req, res) {
        Order.remove({_product: req.params.id}, (err) => {
            if(err)  console.log(`Error deleting orders: ${err}`);
            else  res.json(true);
        })
    }
}
