const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(morgan('dev'));
app.unsubscribe(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());