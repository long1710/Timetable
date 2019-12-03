const mysql = require('mysql');
const express = require('express');
const app = express();
var registration = require('./registration');
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
    res.sendFile(__dirname + '/welcome page.html');
})

//set up the registration page
app.get('/registration', function(req, res){
    res.sendFile(__dirname + '/registration.html');
})

//set up the process page
app.get('/process', function(req, res){
    res.sendFile(__dirname + '/process.html');
})

//set up the result page
app.get('/result', function(red, res){
    res.sendFile(__dirname + '/result.html');
})

//get the action and priority
app.post('/process', function(req, res){
    registration.dbDataTable(con, "Long")//try with one database first
    registration.dbData(con, "Long", req.body.activities, req.body.priority)
})

//get the username and password
app.post('/registration', function(req,res){
    console.log(req.body);
    registration.dbAccount(con, req.body.username, req.body.password);
})
app.listen(3000);