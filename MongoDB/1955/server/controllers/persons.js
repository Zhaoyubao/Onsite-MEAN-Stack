console.log('persons controller loaded')

const Person = require('../models/person')

module.exports = {
    show_all(req, res) {
        Person.find({}, (err, persons) => {
            if(err) {
                res.send('something went wrong');
            } else {
                console.log('successfully retrieve all the persons!');
                res.json(persons);
            }
        })
    },
    add(req, res) {
        Person.findOne({name: req.params.name}, (err, person) => {
            if(err) {
                res.send('something went wrong');
            } else {
                if(person) res.send("That person already existed.");
                else {
                    Person.create({name: req.params.name}, (err, person) => {
                        if(err) {
                            res.send('something went wrong');
                        } else {
                            console.log('successfully added a person!');
                            res.redirect('/'+req.params.name);
                        }
                    })
                }
            }
        })
    },
    delete(req, res) {
        Person.remove({name: req.params.name}, err => {
            if(err) {
                res.send('something went wrong');
            } else {
                console.log('successfully deleted a person!');
                res.redirect('/');
            }
        })
    },
    show_one(req, res) {
        Person.findOne({name: req.params.name}, (err, person) => {
            if(err) {
                res.send('something went wrong');
            } else {
                if(person) res.json(person);
                else res.send("Couldn't find that person.");
            }
        })
    }
}
