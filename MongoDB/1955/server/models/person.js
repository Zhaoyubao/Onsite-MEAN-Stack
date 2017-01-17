console.log('person model loaded');

const mongoose = require('mongoose');

let PersonSchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Person', PersonSchema);
