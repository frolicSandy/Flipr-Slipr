const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const stocksRoutes = require('./routes/stocks-routes');
const usersRoutes = require('./routes/users-routes');
// const doNot = require('./routes/doNotClickThisRoute');
const HttpError = require('./models/http-error');
const connectDB = require('./config/db.js');
// const stockRoutes = require('./routes/stock');

/** for envirconst stockRoutes = require('./routes/stock');onment variable */
dotenv.config({path: './config/config.env'});

/** connecting MongoDB */
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api/stocks', stocksRoutes); // => /api/places...
app.use('/api/users', usersRoutes);


// app.use('/api/doNot', doNot);

// app.use('/stock', stockRoutes);


app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500)
  res.json({message: error.message || 'An unknown error occurred!'});
});

app.listen(5000);