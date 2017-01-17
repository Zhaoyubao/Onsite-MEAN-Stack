const db = require('mongoose'),
    Schema = db.Schema,
    OrderSchema = new Schema({
        _customer: {type: Schema.Types.ObjectId, ref: 'Customer'},
        _product: {type: Schema.Types.ObjectId, ref: 'Product'},
        quantity: {type: Number, min: 0}
    }, {timestamps: true});

module.exports = db.model('Order', OrderSchema);
