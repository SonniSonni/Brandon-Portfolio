const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { body } = require('express-validator');
const email = require('./email-model');

const Email = require('./email-model');

router.post('*', [
  body('name')
    .not().isEmpty()
    .trim()
    .escape(),
  body('emailAdd')
    .isEmail()
    .normalizeEmail(),
  body('message')
    .not().isEmpty()
    .trim()
    .escape()
],
(req, res, next) => {
  const email = new Email({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.emailAdd,
    message: req.body.message
  });
  email.save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: 'Email Sent',
        sentEmail: {
          name: result.name,
          email: result.email,
          message: result.message,
          _id: result._id
        }
      });
    }) 
    .catch(err =>{
      console.log(err);
      res.status(500).json({
        error: err
      })
    });
});

module.exports = router;