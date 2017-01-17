console.log('db config loaded');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dashboard', err => {
    if(err) {
        console.log('Unable to establish connection');
    } else {
        console.log('Connection to dashboard database');
    }
});

// require('../models/dog');
