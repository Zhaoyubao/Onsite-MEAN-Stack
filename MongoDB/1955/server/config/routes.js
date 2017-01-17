console.log('routes config loaded');

const persons = require('../controllers/persons');

module.exports = function(app) {
  app.get('/', persons.show_all);
  app.get('/new/:name', persons.add);
  app.get('/remove/:name', persons.delete);
  app.get('/:name', persons.show_one);
}
