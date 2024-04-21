const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'lms-app',
    port: '3306',
});

connection.connect((err)=>{
    if(err)
        return console.error("connection error");
    console.log("Connected to mysql");
});

module.exports = connection;