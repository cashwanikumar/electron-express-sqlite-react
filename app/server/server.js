import express from 'express';
import bodyParser from 'body-parser';
import serverConst from './constant';

const api = require('./routes/api');

/* eslint-disable no-console */
const port = serverConst.port;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', api);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`App running on port ${serverConst.port}`);
  }
});
