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
    var sql = 'INSERT INTO timetable.timetableProject (username, pass) VALUES ?';
    var values =[
        ['hi', 'bye'],
        ['robiho112', 'wassup'],
        ['leduylong.hn@gmail.com', 'ok']
    ];
    con.query(sql, [values], function(err,result){
        if (err) throw err
        console.log(result);
    })
})
var msg = 'Hello world';
console.log(msg);
