const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");

Router.post("/", (req,res)=>{
      mysqlConnection.query("INSERT INTO people (name, age) VALUES ('NAME_1' , 'AGE_1')", (err, rows, fields)=>{
      if(!err)
      {
          res.send(rows);
          console.log("Record Inserted");
          console.log(rows);

      }
      else
      {
          console.log(err);
      }

      })

})

module.exports = Router;