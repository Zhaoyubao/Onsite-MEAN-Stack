console.log('db config is loaded');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/friendsDB');
mongoose.Promise = global.Promise;

mongoose.connection.on('error', err => console.error(`Mongoose default connection error: ${err}`));
