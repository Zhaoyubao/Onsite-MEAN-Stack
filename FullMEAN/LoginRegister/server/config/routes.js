console.log('Routes config is loaded');

let users = require('../controllers/users');

module.exports = (app) => {
    app.post('/register', users.register);
    app.post('/login', users.login);
    app.get('/users/:id', users.getUser);
    app.get('/users', users.getUsers);
}
