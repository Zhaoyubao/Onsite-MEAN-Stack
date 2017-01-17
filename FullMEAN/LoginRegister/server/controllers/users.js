console.log('Users controller is loaded');

let User = require('../models/user'),
    bcrypt = require('bcryptjs');

module.exports = {
    login(req, res) {
        User.findOne({'email': req.body.email}, (err, user) => {
            if(err) console.log(`Error while getting user: ${err}`);
            if(user) {
                if(bcrypt.compareSync(req.body.pw, user.pw)) {
                    res.json(user);
                } else {
                    res.json({pwErr: true});
                }
            } else {
                res.json({emailErr: true});
            }
        })
    },
    register(req, res) {
        let newUser = req.body,
            hashPw = bcrypt.hashSync(req.body.pw, 8);
        newUser.pw = hashPw;
        User.create(newUser, (err, user) => {
            if(err) {
                console.log(`Error adding new user: ${err}`);
                res.json({error: true});
            }
            else res.json(user);
        })
    },
    getUser(req, res) {
        User.findOne({ '_id': req.params.id }).exec( (err, user) => {
            if(err) {
                console.log(`Error while getting user: ${err}`);
            } else {
                res.json(user);
            }
        })
    },
    getUsers(req, res) {
        User.find().exec( (err, users) => {
            if(err) {
                console.log(`Error while getting users: ${err}`);
            } else {
                res.json(users);
            }
        })
    }
}
