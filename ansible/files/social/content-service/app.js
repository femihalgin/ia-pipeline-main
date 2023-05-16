var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');

var content = require('./routes/content');
const mongoose = require("mongoose");
const contentController = require("./controllers/content_controller");

var app = express();


app.use(logger('dev'));
app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
//app.use(express.static(path.join(__dirname, 'public')));

const mongoUrl =
    "mongodb+srv://femi:123@cluster0.mqdir0d.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoUrl,{
    useNewUrlParser: true,
}).then(() => {
    console.log("Connected to database");
}).catch((e) => console.log(e));
require('./models/content')

app.get('/contents/',(contentController.allContentList))
//app.post('/contents/',(contentController.createContent));

// catch 404 and forward to error handler
app.listen(8082);
