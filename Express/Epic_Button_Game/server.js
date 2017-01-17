var express = require('express'),
    port = 3000,
    app = express();

app.use(express.static('static'));

app.set('views', 'views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index'));

var server = app.listen(port, () => console.log(`Running in localhost at port ${port}`));
var io = require('socket.io').listen(server);

var count = 0;

io.sockets.on('connection', socket => {
    socket.on('click_epic_button', data => {
        console.log('Socket ID:', socket.id);
        count++;
        io.emit('increment', {count: count});
    })
    socket.on('click_reset', data => {
        console.log('Socket ID:', socket.id);
        count = 0;
        io.emit('reset', {count: count});
    })
    socket.emit('refresh', {count: count});
})
