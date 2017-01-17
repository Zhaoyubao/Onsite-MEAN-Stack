console.log('Users controller is loaded');

let User = require('../models/user');

module.exports = {
    logreg(req, res) {
        User.findOne({name: req.body.name}, (err, user) => {
            if(err)  console.log(`Error getting user: ${err}`);
            else {
                if(user) {
                    console.log('Existed user:', user.name);
                    res.json(user);
                } else {
                    User.create(req.body, (err, user) => {
                        if(err)  console.log(`Error adding user: ${err}`);
                        else {
                            console.log('New created user:', user.name);
                            res.json(user);
                        }
                    })
                }
            }
        })
    },

    getUser(req, res) {
        User.findOne({ 'name': req.params.user }).exec( (err, user) => {
            if(err)  console.log(`Error while getting user: ${err}`);
            else  res.json(user);
        })
    },

}
