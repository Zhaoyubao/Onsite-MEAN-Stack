console.log('friend model is loaded');

const mongoose = require('mongoose');

let friendSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    dob: Date
    }, {timestamps: true});

module.exports = mongoose.model("Friend", friendSchema);
