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