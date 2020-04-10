const User = require('../models/user.model');

exports.getSignup = (req, res) => {
    res.render('signup');
};

exports.getSignin = (req, res) => {
    res.render('signin');
};

exports.signup = (req, res) => {
    User.unique(req.body.email)
        .then(result => {
            if (result) {
                const user = new User(req.body.email, req.body.password);
                return user.save();
            } else {
                return res.redirect('/auth/signup');
            }
        })
        .then(result => {
            if (result) {
                console.log('ok');
            }
        })
        .catch(err => {
            res.redirect('/auth/signup');
        });
};

exports.signin = (req, res) => {
    User
        .find(req.body.email)
        .then(user => {
            if (user.password !== req.body.password) {
                res.redirect('/auth/signin');
            } else {
                console.log('ok');
            }
        })
        .catch(err => {
            res.redirect('/auth/signin');
        })
};