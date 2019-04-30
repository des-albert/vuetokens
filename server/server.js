const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./DB.js');
const serveStatic = require('serve-static');

const tokenRoute = require('./routes/token.route');
const userRoute = require('./routes/user.route');
const subjectRoute = require('./routes/subject.route');

const app = express();
const router = express.Router();
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, {useNewUrlParser: true}).then(
  () => { console.log('MongoDB database connection established successfully'); },
  err =>  console.log('cannot connect to MongoDB database')
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/tokens', tokenRoute);
app.use('/users', userRoute);
app.use('/subjects', subjectRoute);

app.use(serveStatic(__dirname + '/dist'));

const PORT = 4000;
const port = process.env.PORT || PORT;
app.listen(port, () => {
  console.log('Express server running on port ' + port);
});
