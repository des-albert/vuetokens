const express = require('express');
const userRoutes = express.Router();

// Require user model in our routes module
let User = require('../models/user');


// Defined store route
userRoutes.route('/add').post( (req, res) => {
  let user = new User(req.body);
  user.save()
    .then(() => {
      res.status(200).json({'User': 'User added successfully'});
    })
    .catch(() => {
      res.status(400).send('unable to save to database');
    });
});

// Defined get data(index or listing) route
userRoutes.route('/').get((req, res) => {
  User.find((err, users) => {
    if(err){
      res.json(err);
    }
    else {
      res.json(users);
    }
  });
});

// Defined edit route
userRoutes.route('/edit/:id').get((req, res) => {
  let id = req.params.id;
  User.findById(id, (err, user) => {
    if(err) {
      res.json(err);
    }
    res.json(user);
  });
});

//  Defined update route
userRoutes.route('/update/:id').post((req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (!user)
      res.status(404).send('data is not found');
    else {
      user.name = req.body.name;
      user.email = req.body.email;
      user.save().then(() => {
        res.json('Update complete');
      })
        .catch(() => {
          res.status(400).send('unable to update the database');
        });
    }
  });
});

// Defined delete | remove | destroy route
userRoutes.route('/delete/:id').delete((req, res) => {
  User.findByIdAndRemove({_id: req.params.id}, (err) => {
    if(err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = userRoutes;
