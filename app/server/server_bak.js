const sqlite3 = require('sqlite3').verbose();
// const path = require('path');
// const db = new sqlite3.Database(
//   path.resolve(__dirname) + '/database_file/grocery.sqlite'
// );

// db.serialize(() => {
//   // db.run('CREATE TABLE lorem (info TEXT)');

//   const stmt = db.prepare('INSERT INTO lorem VALUES (?)');
//   for (let i = 0; i < 10; i++) {
//     stmt.run(`Ipsum ${i}`);
//   }
//   stmt.finalize();

//   db.each('SELECT rowid AS id, info FROM lorem', (err, row) => {
//     console.log(`Rows: ${row.id}: ${row.info}`);
//   });
// });

// db.close();

import express from 'express';
// import webpack from 'webpack';
import path from 'path';
// import config from '../../webpack.config.dev';
// import open from 'open';
import bodyParser from 'body-parser';
// const index = require('./routes/index');
// const api = require('./routes/api');

/* eslint-disable no-console */
const port = 5001;
const app = express();
// const compiler = webpack(config);

// app.use(require('webpack-dev-middleware')(compiler, {
//     noInfo: true,
//     publicPath: config.output.publicPath
// }));

// app.use(require('webpack-hot-middleware')(compiler));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/', index);
// app.use('/api', api);
const db = new sqlite3.Database(
  path.resolve(__dirname) + '/database_file/grocery.sqlite'
);

app.get('/test', function (req, res) {    
    var data = [];
    db.serialize(() => {
        db.each('SELECT rowid AS id, info FROM lorem', (err, row) => {
          data.push(`Rows: ${row.id}: ${row.info}`);
          console.log(`Rows: ${row.id}: ${row.info}`);
        });
        console.log(data);
    });
    res.send(data);
});

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

