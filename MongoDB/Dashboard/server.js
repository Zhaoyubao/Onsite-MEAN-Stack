const express = require('express'),
    bodyParser = require('body-parser'),
    port = 3000,
    app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./client/static'));

app.set('views', './client/views');
app.set('view engine', 'ejs');

require('./server/config/db');
require('./server/config/routes')(app);

app.listen(port, () => {
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  console.log(`Server is up. Listening on port ${port}`);
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
});
