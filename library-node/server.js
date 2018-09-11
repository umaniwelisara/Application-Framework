'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.Promise = global.Promise;

require('./app/Models/Author.Model');
require('./app/Models/Book.Model');

const AuthorRoute=require('./app/Routes/Author.Route');
const AuthorRoute=require('./app/Routes/Book.Route');

const db=require('./config/db');

var url = "mongodb://localhost:27017/library";

mongoose.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});

app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})