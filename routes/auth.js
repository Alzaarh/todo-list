const router = require('express').Router();

const {
    getSignup,
    signin,
    signup,
} = require('../controllers/user.controller');

router.get('/signup', getSignup);

router.get('/signin', signin);

router.post('/signup', signup);

module.exports = router;