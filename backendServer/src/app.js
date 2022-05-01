const express = require('express');
const app = express();

// modules
const path = require('path');
const bodyParser = require('body-parser');

// 설정파일
const config = require('./config');
const routes = require('./routes/index');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', routes);

module.exports = app;