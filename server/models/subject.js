const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Subject = new Schema({

  name: {
    type: String
  },
  activity: {
    type: String
  }
}, {
  collection: 'subjects'
});

module.exports = mongoose.model('Subject', Subject);
