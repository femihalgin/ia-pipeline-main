var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');

const mongoose = require("mongoose");
const usercontroller = require("./controllers/user_controller");

var app = express();

const cors = require("cors");
app.use(cors());

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
require('./models/user')

app.get('/users/',(usercontroller.allUserList));
app.post('/users/',(usercontroller.createUser));
app.post('/login/',(usercontroller.login));

// catch 404 and forward to error handler
app.listen(8081);
