const mongoose = require('mongoose');

const emailSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {type: String, required: true},
  email: {type: String, required: true},
  message: {type: String, required: true}
})

module.exports = mongoose.model('Email', emailSchema);