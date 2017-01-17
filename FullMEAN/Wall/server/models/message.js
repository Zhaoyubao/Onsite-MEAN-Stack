console.log('Message model is loaded');

const db = require('mongoose'),
    Schema = db.Schema,
    messageSchema = new Schema({
        content: { type: String, required: true },
        poster: { type: String, required: true },
        _comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
    }, {timestamps: true})

module.exports = db.model('Message', messageSchema);
