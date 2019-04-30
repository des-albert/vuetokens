const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Token = new Schema({

  creator: {
    type: String
  },
  recipient: {
    type: String
  },
  subject: {
    type: String
  },
  request: {
    type: String

  },
  reply: {
    type: String
  },
  status: {
    type: String,
    default: 'sent'
  }
}, {
  collection: 'tokens'
});

module.exports = mongoose.model('Token', Token);
