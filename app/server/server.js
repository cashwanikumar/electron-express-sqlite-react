import express from 'express';
// import path from 'path';
import bodyParser from 'body-parser';
// const index = require('./routes/index');
const api = require('./routes/api');

/* eslint-disable no-console */
const port = 5001;
const app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/', index);
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('App running on port 5001 🔥')
    }
});
