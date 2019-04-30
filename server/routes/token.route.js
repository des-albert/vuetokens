const express = require('express');
const tokenRoutes = express.Router();

// Require token model in our routes module
let Token = require('../models/token');


// Defined store route
tokenRoutes.route('/add').post( (req, res) => {
  let token = new Token(req.body);
  token.save()
    .then(() => {
      res.status(200).json({'Token': 'Token added successfully'});
    })
    .catch(() => {
      res.status(400).send('unable to save to database');
    });
});

// Defined get data(index or listing) route
tokenRoutes.route('/').get((req, res) => {
  Token.find((err, tokens) => {
    if(err){
      res.json(err);
    }
    else {
      res.json(tokens);
    }
  });
});

// Defined edit route
tokenRoutes.route('/edit/:id').get((req, res) => {
  let id = req.params.id;
  Token.findById(id, (err, token) => {
    if(err) {
      res.json(err);
    }
    res.json(token);
  });
});

//  Defined update route
tokenRoutes.route('/update/:id').post((req, res) => {
  Token.findById(req.params.id, (err, token) => {
    if (!token)
      res.status(404).send('data is not found');
    else {
      token.recipient = req.body.recipient;
      token.subject = req.body.subject;
      token.request = req.body.request;
      token.reply = req.body.reply;
      token.status = req.body.status;
      token.save().then(() => {res.json('Update complete');
      })
        .catch(() => {
          res.status(400).send('unable to update the database');
        });
    }
  });
});

// Defined delete | remove | destroy route
tokenRoutes.route('/delete/:id').delete((req, res) => {
  Token.findByIdAndRemove({_id: req.params.id}, (err) => {
    if(err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = tokenRoutes;
