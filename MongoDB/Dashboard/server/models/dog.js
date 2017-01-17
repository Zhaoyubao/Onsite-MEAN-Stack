console.log('dog model loaded');

const mongoose = require('mongoose');

let DogSchema = new mongoose.Schema({
    name: String,
   	age: Number,
   	breed: String,
   	weight: Number,
}, { timestamps: true});

module.exports = mongoose.model('Dog', DogSchema);
