console.log('Routes config is loaded');

let users = require('../controllers/users'),
    messages = require('../controllers/messages');

module.exports = function(app) {
    app.post('/logreg', users.logreg);
    app.get('/users/:user', users.getUser);

    app.post('/messages/:user', messages.addMsg);
    app.get('/messages', messages.getMsgs);

    app.post('/comments/:user/:msgId', messages.addComment);
}
