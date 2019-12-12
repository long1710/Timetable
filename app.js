const mysql = require('mysql');
const express = require('express');
const app = express();
const timetable = require('./timeTableAlgo');
var database = require('./database');

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use('/assets', express.static('assets'));
//test case for 1 account, TODO use function to take from multiple account 
var placebo = timetable.finalTimetable1();
var login;
console.log(placebo)

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
    res.render('process',{list: placebo});
})

app.get('/login', function(req, res){
    res.render('login');
})
//set up the result page
app.get('/result', function(red, res){
    res.render('result',{list:placebo});
})

//get the action and priority
app.post('/process', function(req, res){
    //database.dbDataTable(con, login);//TODO: switch HAO to user
   // database.dbData(con, login, req.body);
    placebo.push(req.body);
    console.log(req.body);
})

//get the username and password
app.post('/registration', function(req,res){
     console.log(req.body);
   //database.dbAccount(con, req.body.username, req.body.password);
   //console.log(timetable.finalTimetable1());//testing json variable
})

//check username and password with data 
app.post('/login', function(req, res){
    console.log(req.body);
    console.log(database.dbLogin(con, req.body.username, req.body.password));//TODO: check how to log in
})
app.listen(3000);