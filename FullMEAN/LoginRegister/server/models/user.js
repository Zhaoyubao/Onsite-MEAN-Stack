console.log('User model is loaded');

const db = require('mongoose'),
    Schema = db.Schema,
    userSchema = new Schema({
        name: {
            first: { type: String, required: true },
            last: { type: String, required: true }
        },
        email: { type: String, unique: true, required: true },
        dob: { type: Date, required: true },
        pw: { type: String, required: true }
        }, {timestamps: true});

module.exports = db.model('User', userSchema);
