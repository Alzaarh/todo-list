const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({
    extended: false,
}));

app.get('/', (req, res) => {
    res.redirect('/auth/signup');
});

app.use('/auth', authRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log('server is running');
});