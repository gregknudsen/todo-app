const express = require('express');
const app = express();
const config = require('./config');
const mongoose = require('mongoose');
const setupController = require('./controllers/setupController');
const apiController = require('./controllers/apiController');

const port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'pug');

app.get('/', function(req, res){
  res.render('index')
});

mongoose.connect(config.getDbConnectionString());
setupController(app);
apiController(app);

app.listen(port);
