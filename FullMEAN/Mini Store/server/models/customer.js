const db = require('mongoose'),
    CustomerSchema = new db.Schema({
        name: {type: String, unique: true, required:true}
    }, {timestamps: true});

module.exports = db.model('Customer', CustomerSchema);
