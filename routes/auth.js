const router = require('express').Router();

const {
    getSignup,
    getSignin,
    signup,
} = require('../controllers/user.controller');

router.get('/signup', getSignup);

router.get('/signin', getSignin);

router.post('/signup', signup);

module.exports = router;