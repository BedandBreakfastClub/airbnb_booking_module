const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/booking');

var db = mongoose.connection;

module.exports = db;
