'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({

    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        unique: true
    }
});

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;