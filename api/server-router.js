const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Email = require('./email-model');

router.post('/contact?name=&email-add=&message=', (req, res, next) => {
  const email = new Email({
  _id: new mongoose.Types.ObjectId(),
  name: req.body.name,
  email: req.body.email,
  message: req.body.message
  });
})