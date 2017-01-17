console.log('dogs controller loaded');

const Dog = require('../models/dog');

module.exports = {
    show_all(req, res) {
        Dog.find({}, (err, dogs) => {
            if(err) {
                res.send('something went wrong');
            } else {
                console.log('successfully retrieve all the dogs!');
                res.render('index', {dogs: dogs});
            }
        })
    },
    show_one(req, res) {
        Dog.findById(req.params.id, (err, dog) => {
            if(err) {
                res.send('something went wrong');
            } else {
                console.log('successfully found!');
                res.render('show', {dog: dog});
            }
        })
    },
    edit(req, res) {
        Dog.findById(req.params.id, (err, dog) => {
            if(err) {
                res.send('something went wrong');
            } else {
                res.render('edit', {dog: dog});
            }
        })
    },
    update(req, res) {
        Dog.findByIdAndUpdate(req.params.id, req.body, (err, dog) => {
            if(err) {
                res.send('something went wrong');
            } else {
                console.log('successfully updated!');
                res.redirect('/dogs/'+req.params.id);
            }
        })
    },
    create(req, res) {
        Dog.create(req.body, (err, dog) => {
            if(err) {
                res.send('something went wrong');
            } else {
                console.log('successfully added an dog!');
                res.redirect('/dogs/'+dog.id);
            }
        })
    },
    delete(req, res) {
        Dog.remove({_id: req.params.id}, err => {
            if(err) {
                res.send('something went wrong');
            } else {
                console.log('successfully deleted!');
                res.redirect('/');
            }
        })
    }
}
