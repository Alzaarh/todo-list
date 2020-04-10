const User = require('../models/user.model');

exports.getSignup = (req, res) => {
    res.render('signup');
};

exports.signin = (req, res) => {
    console.log('there');
};

exports.signup = (req, res) => {
    User.unique(req.body.email)
        .then(result => {
            if (result) {
                console.log('ok');
            } else {
                console.log('nok');
            }
        })
        .catch(err => {
            res.redirect('/auth/signup');
        });
};