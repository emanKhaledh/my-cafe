const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const controllers = require('./controllers');
const path = require('path');
require('env2')('./server/.env');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('port', process.env.PORT || 3001);
app.use(controllers);
app.use(express.static(path.join(__dirname, '..', 'client', 'build'))); 
app.get('*', (req, res) => { res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html')) })

module.exports = app;