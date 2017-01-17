console.log('User model is loaded');

const db = require('mongoose'),
    Schema = db.Schema,
    UserSchema = new Schema({
        name: {
            type: String,
            maxlength: 20,
            required: true,
            unique: true
        }
    }, {timestamps: true})

module.exports = db.model('User', UserSchema);
