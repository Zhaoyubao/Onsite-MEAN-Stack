var express = require('express'),
    port = 3000;
    app = express();

app.use(express.static('static'));

app.set('views', 'views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index'));

var server = app.listen(port, () => {
	console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
	console.log(`Running in localhost at port ${port}`);
	console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', socket => {
    socket.on('posting_form', data => {
        console.log("Socket ID:", socket.id);
        io.emit('updated_message', data);
        io.emit('random_number', {random: Math.floor(Math.random()*1000+1)});
    })
})
