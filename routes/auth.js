const router = require('express').Router();

const {
    getSignup,
    getSignin,
    signup,
    signin,
} = require('../controllers/user.controller');

router.get('/signup', getSignup);

router.get('/signin', getSignin);

router.post('/signup', signup);

router.post('/signin', signin);

module.exports = router;