const router = require('express').Router();

const {
    getSignup,
    signin,
} = require('../controllers/user.controller');

router.get('/signup', getSignup);

router.get('/signin', signin);

module.exports = router;