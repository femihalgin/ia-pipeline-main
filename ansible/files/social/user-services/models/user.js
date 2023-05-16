'use strict'
 const mongoose = require('mongoose') ;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fname: {
        type: String,
    },
    lname: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },

});

module.exports = mongoose.model('Users', UserSchema);
