const express = require('express'),
    port = 3000,
    app = express();

app.use(express.static('client'));
app.use(express.static('client/static'));
app.use(express.static('node_modules'));
app.use(express.static('bower_components'));

app.listen(port, () => console.log(`Server started on port ${port}`));
