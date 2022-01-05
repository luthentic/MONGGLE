const express = require('express');
let mongoose = require("mongoose");
let passport = require("passport");
let bodyParser = require("body-parser");
let LocalStrategy = require("passport-local");
let passportLocalMongoose = require("passport-local-mongoose");
let User = require("./models/user");

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/auth_demo_app");

const app = express();
app.set('view-engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.use(require("express-session"))

app.get('/',(req, res) =>{
  res.render('index.ejs', {name:'Kyle'});
});

app.get('/login.', (req, res) =>{
  res.render ('login.ejs');
});

app.get('/register', (req, res) =>{
  res.render ('register.ejs');
});

app.listen(3000);