const express = require('express');
const bodParse = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodParse.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost/saboresCatering');

// Route Path Require
const indexRouter = require('./routes/index');

// Mount Routes
app.use('/', indexRouter);

app.get('*', function (req, res) {
    res.render('urlError');
})

app.listen(5000, function () {
    console.log('Alive on PORT: 5000');
});
