const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const emailRouter = require('./api/server-router');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Acces-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  if(req.method === "OPTIONS"){
    res.header('Access-Control-Allow-Methods', 'POST')
    return res.status(200).json({});
  }
  next();
}); 

app.use('/contact?name=&email-add=&message=', emailRouter);