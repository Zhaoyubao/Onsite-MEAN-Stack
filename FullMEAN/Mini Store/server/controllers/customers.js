let Customer = require('../models/customer');

module.exports = {
    index(req, res) {
        Customer.find().exec( (err, customers) => {
            if(err)  console.log(`Error getting customers: ${err}`);
            else  res.json(customers);
        })
    },
    recent(req, res) {
        Customer.find().limit(3).exec( (err, customers) => {
            if(err)  console.log(`Error getting customers: ${err}`);
            else  res.json(customers);
        })
    },
    create(req, res) {
        Customer.create(req.body, (err, customer) => {
            if(err) {
                console.log(`Error adding customer: ${err}`);
                res.json({error: true});
            }
            else  res.json(customer);
        })
    },
    delete(req, res) {
        Customer.findByIdAndRemove(req.params.id, (err) => {
            if(err)  console.log(`Error deleting customer: ${err}`);
            else  res.json(true);
        })
    }
}
