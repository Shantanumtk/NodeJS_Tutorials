const mysql = require("mysql");
var mysqlConnection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "password",
    database : "database_name",
    multipleStatements : true
});

mysqlConnection.connect((err)=>{
     if(!err)
     {   console.log("Server Started At Port 8080");
         console.log("Connected With MySQL Database");
     }    
     else
     {   
          console.log("Connection Failed");
          return console.error("error" + err.message);
     }

});

module.exports = mysqlConnection;
