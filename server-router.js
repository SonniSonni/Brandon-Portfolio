const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { body } = require('express-validator');
const email = require('./email-model');
const nodemailer = require('nodemailer');

const mailPorter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: 'brandonlschaen@gmail.com',
    pass: process.env.REACT_APP_APP_PWD
  }
});

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
    email: req.body.email,
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

      let adminForward = {
        from: result.email,
        to: 'brandonlschaen@gmail.com',
        subject: 'Server auto email from ' + result.email,
        text: result.message
      };
      let senderConfirm = {
        from: 'brandonlschaen@gmail.com',
        to: result.email,
        subject: 'Thank you for your message',
        text: 'I appreciate your message, and will reply as soon as I can!'
      };
      mailPorter.sendMail(adminForward, function(error, info){
        if(error){
          console.log(error);
        } else{
          console.log("Email sent:" + info.response);
        }
      })
      mailPorter.sendMail(senderConfirm, function(error, info){
        if(error){
          console.log(error);
        } else{
          console.log("Email sent:" + info.response);
        }
      })
    }) 
    .catch(err =>{
      console.log(err);
      res.status(500).json({
        error: err
      })
    });
});

module.exports = router;