console.log('routes config loaded');

const friends = require('../controllers/friends');

module.exports = (app) => {
    app.get('/friends', friends.index);
    app.post('/friends', friends.create);
    app.get('/friends/:id', friends.show);
    app.put('/friends/:id', friends.update);
    app.delete('/friends/:id', friends.delete);
}
