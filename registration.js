const mysql = require('mysql');

//add username and password into database
function dbAccount(db, username, password){
    var sql = `INSERT INTO timetable.timetableproject (username, pass) VALUES ('${username}', '${password}')`;
    db.query(sql, function(err){
        if(err) throw err
        console.log("succeed");
    })
    console.log(sql);
}

module.exports = dbAccount;