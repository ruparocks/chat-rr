// app/models/message.js

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var messageSchema = new Schema({
  title:  String,
  author: String,
  body:   String,
  date: { type: Date, default: Date.now },
  hidden: Boolean,
});

module.exports = mongoose.model('Message', messageSchema);