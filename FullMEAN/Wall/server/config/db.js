console.log('DB config is loaded');

const db = require('mongoose');

db.connect('mongodb://localhost/wallDB');

db.Promise = global.Promise;

db.connection.on('error', err => console.error(`Mongoose default connection error: ${err}`));
