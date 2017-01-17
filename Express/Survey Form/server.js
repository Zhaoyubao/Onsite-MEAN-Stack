var express = require('express'),
 	bodyParser = require('body-parser'),
	port = 8000,
	app = express();

app.use(bodyParser.urlencoded({extended:false}));
// app.use(express.static(__dirname + '/static'));
app.use(express.static('static'));

app.set('views', 'views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index'));

app.post('/result', (req, res) => {
	context = {
		name: req.body.name.toUpperCase(),
		location: req.body.location,
		language: req.body.language,
		comment: req.body.comment
	}
	res.render('result', context);
});

app.get('/back', (req, res) => res.redirect('/'));

app.listen(port, () => {
	console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
	console.log(`Running in localhost at port ${port}`);
	console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
})
