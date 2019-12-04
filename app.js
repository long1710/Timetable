const mysql = require('mysql');
const express = require('express');
const app = express();
const timetable = require('./timeTableAlgo');
var registration = require('./registration');

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use('/assets', express.static('assets'));


//connect to mysql server
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',   
    password: '1234rewq'
})
//alter mysql server
con.connect(function(err){
    if (err) throw err
    console.log('connected to database');
})

//set up the home page
app.get('/home_page', function(req,res){
   res.render('welcome page');
})

//set up the registration page
app.get('/registration', function(req, res){
    res.render('registration');
})

//set up the process page
app.get('/process', function(req, res){
    res.render('process');
})

//set up the result page
app.get('/result', function(red, res){
    res.render('result')
})

//get the action and priority
app.post('/process', function(req, res){
    registration.dbDataTable(con, "Hao");//TODO: switch HAO to user
    registration.dbData(con, "Hao", req.body);
    res.send("registration complete !");
})

//get the username and password
app.post('/registration', function(req,res){
    console.log(req.body);
    registration.dbAccount(con, req.body.username, req.body.password);
   // console.log(timetable.templateTimetable());//testing json variable
    res.send("registration complete !");
})
app.listen(3000);