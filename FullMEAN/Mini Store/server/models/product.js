const db = require('mongoose'),
    ProductSchema = new db.Schema({
        name: String,
        description: String,
        imgURL: { type: String, default: 'http://www.trustvets.com/images/NoImageAvailable.png' },
        quantity: {type: Number, min: 0}
    }, { timestamps: true });

module.exports = db.model('Product', ProductSchema);
