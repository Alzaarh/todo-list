const User = require('../models/user.model');

exports.getSignup = (req, res) => {
    res.render('signup');
};

exports.signin = (req, res) => {
    console.log('there');
};