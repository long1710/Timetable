const mysql = require('mysql');

//add username and password into database
function dbAccount(db, username, password){
    var sql = `INSERT INTO timetable.timetableproject (username, pass) VALUES ('${username}', '${password}')`;
    db.query(sql, function(err){
        if(err) throw err
        console.log("succeed in creating new account");
    })
    console.log(sql);
}

//create username and password for the new account into database if account is register 
function dbDataTable(db, username){
    var sql = `CREATE TABLE IF NOT EXISTS timetable.${username} (
        activities varCHAR(255), 
        priority INT,
        lunch varCHAR(255),
        hygene INT,
        sleep INT
    )`; //TODO ( need an else incase it does exist)
    db.query(sql, function(err){
        if(err) throw err
        console.log('succeed in creating new table for account');
    })
}

//add activities and priority to database
function dbData(db, username, body){
    var sql = `INSERT INTO timetable.${username} (activities, priority, lunch, hygene, sleep) VALUES ('${body.activities}', '${body.priority}', '${body.meal}','${body.sleep}','${body.hygene}')`;
    db.query(sql, function(err){
        if(err) throw err
        console.log('succeed addting activities to account');
    })
}


module.exports = {
    dbAccount,
    dbDataTable,
    dbData
}