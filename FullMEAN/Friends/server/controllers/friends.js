console.log('friends controller is loaded');

const Friend = require('../models/friend');

module.exports = {
    index(req, res) {
        Friend.find( {}, (err, friends) => {
            if(err) {
                console.log(`Error while getting all records`);
                console.log(err);
            } else {
                res.json(friends);
                // res.send(friends);
            }
        })
    },
    show(req, res) {
        Friend.findOne({ '_id': req.params.id }).exec( (err, friend) => {
            if(err) {
                console.log(`Error while getting Friend record`);
                console.log(err);
            } else {
                res.json(friend);
            }
        })
    },
    create(req, res) {
        Friend.create(req.body, (err, friend) => {
            if(err) {
                console.log(`Error adding new Friend record`);
                console.log(err);
            } else {
                res.json(friend);
            }
        })
    },
    update(req, res) {
        Friend.findByIdAndUpdate(req.params.id, req.body, (err, friend) => {
            if(err) {
                console.log(`Error updating Friend record`);
                console.log(err);
            } else {
                res.json(friend);
            }
        })
    },
    delete(req, res) {
        Friend.findByIdAndRemove(req.params.id, (err) => {
            if(err) {
                console.log(`Error deleting Friend record`);
                console.log(err);
            } else {
                res.json("Deleted!");
            }
        })
    }
}
