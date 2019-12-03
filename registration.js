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
function dbData(db, username, activities, priority){
    var sql = `CREATE TABLE IF NOT EXISTS ${username} {
            activities varCHAR(255),
            priority INT
    }`;
    db.query(sql, function(err){
        if(err) throw err
        console.log('succeed in creating new table for account');
    })
    var sql1 = `INSERT INTO timetable.${username} (activities, priority) VALUES ('${activities}', '${priority}')`;
}

module.exports = {
    dbAccount
}