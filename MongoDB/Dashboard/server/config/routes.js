console.log('routes config loaded')

const dogs = require('../controllers/dogs');

module.exports = function(app) {
  app.get('/', dogs.show_all);
  app.get('/dogs/new', (req, res) => res.render('new'));
  app.get('/dogs/:id', dogs.show_one);
  app.get('/dogs/:id/edit', dogs.edit);
  app.post('/dogs', dogs.create);
  app.post('/dogs/:id', dogs.update);
  app.get('/dogs/:id/delete', dogs.delete);
}
