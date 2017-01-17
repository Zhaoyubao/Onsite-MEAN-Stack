console.log('Comment model is loaded');

const db = require('mongoose'),
    Schema = db.Schema,
    commentSchema = new Schema({
        content: { type: String, required: true },
        poster: { type: String, required: true },
    }, {timestamps: true})

module.exports = db.model('Comment', commentSchema);
