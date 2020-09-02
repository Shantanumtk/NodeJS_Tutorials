const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");

Router.put("/", (req,res)=>{
      mysqlConnection.query("UPDATE people SET name = 'NAME_3' WHERE name = 'NAME_1' ", (err, rows, fields)=>{
      if(!err)
      {
          res.send(rows);
          console.log("Record Updated");
          console.log(rows);

      }
      else
      {
          console.log(err);
      }

      })

})

module.exports = Router;