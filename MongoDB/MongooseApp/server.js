const express = require('express'),
    bodyParser = require('body-parser'),
    port = 3000,
    app = express(),
    mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/basic_mongoose');
let UserSchema = new mongoose.Schema({
    name: String,
    age: Number
}, {timestamps: { createdAt: 'created_at' }});
let User = mongoose.model('User', UserSchema);

app.use(express.static('static'))
app.use(bodyParser.urlencoded({extended: true}))

app.set('views', 'views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    User.find({ age : { $lte: 10 }}, 'name age', (err, users) => {
        if(err) {
            console.log('something went wrong');
        } else {
            console.log('successfully retrieve users!');
            res.render('index', {users:users});
        }
    })
})

app.post('/users', (req, res) => {
    console.log('Post Body:', req.body);
    User.create({name: req.body.name, age: req.body.age}, (err, user) => {
        if(err) {
            console.log('something went wrong');
        } else {
            console.log('successfully added a user!');
            res.redirect('/');
        }
    })
})

app.listen(port, () => console.log(`Running in localhost at port ${port}`) )
