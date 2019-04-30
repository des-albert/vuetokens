const express = require('express');
const subjectRoutes = express.Router();

// Require user model in our routes module
let Subject = require('../models/subject');


// Defined store route
subjectRoutes.route('/add').post( (req, res) => {
  let subject = new Subject(req.body);
  subject.save()
    .then(() => {
      res.status(200).json({'Subject': 'Subject added successfully'});
    })
    .catch(() => {
      res.status(400).send('unable to save to database');
    });
});

// Defined get data(index or listing) route
subjectRoutes.route('/').get((req, res) => {
  Subject.find((err, subjects) => {
    if (err) {
      res.json(err);
    } else {
      res.json(subjects);
    }
  });
});

// Defined edit route
subjectRoutes.route('/edit/:id').get((req, res) => {
  let id = req.params.id;
  Subject.findById(id, (err, subject) => {
    if (err) {
      res.json(err);
    }
    res.json(subject);
  });
});

//  Defined update route
subjectRoutes.route('/update/:id').post((req, res) => {
  Subject.findById(req.params.id, (err, subject) => {
    if (!subject) res.status(404).send('data is not found');
    else {
      subject.name = req.body.name;
      subject.activity = req.body.activity;
      subject.save().then(() => {
        res.json('Update complete');
      })
        .catch(() => {
          res.status(400).send('unable to update the database');
        });
    }
  });
});

// Defined delete | remove | destroy route
subjectRoutes.route('/delete/:id').delete((req, res) => {
  Subject.findByIdAndRemove({ _id: req.params.id }, err => {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = subjectRoutes;
