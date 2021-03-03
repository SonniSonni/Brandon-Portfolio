const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const emailRouter = require('./router/api/server-router');
const path = require('path')
const cors = require('cors');

require('dotenv').config();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://Brandon:' + process.env.REACT_APP_ATLAS + '@cluster0.x7r5x.mongodb.net/BrandonPortfolio?retryWrites=true&w=majority',
 {
   useNewUrlParser: true,
   useUnifiedTopology: true
 });

app.use(cors());

app.post('/contact', emailRouter);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.use((req, res, next) => {
  const error = new Error('NOT FOUND');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  })
});

module.exports = app;