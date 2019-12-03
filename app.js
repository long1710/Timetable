var mysql = require('mysql');
var express = require('express');
var app = express();

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

app.listen(3000);