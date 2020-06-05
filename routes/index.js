const express = require('express');
const app = express();
const urlRouter = require('./url.route');


app.use('/',urlRouter);


module.exports = app;