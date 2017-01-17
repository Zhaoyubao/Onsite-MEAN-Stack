const express = require('express'),
    port = 3000,
    app = express();

app.use(express.static('client/static', {index: 'main.html'}));
app.use(express.static('client'));
app.use(express.static('bower_components'));



app.listen(port, () => {
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  console.log(`Server is up. Listening on port ${port}`);
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
});
