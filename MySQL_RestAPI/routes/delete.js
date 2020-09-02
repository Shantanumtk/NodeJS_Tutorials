const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");

Router.delete("/", (req,res)=>{
      mysqlConnection.query("DELETE FROM people WHERE name = 'NAME_3' ", (err, rows, fields)=>{
      if(!err)
      {
          res.send(rows);
          console.log("Record Deleted");
          console.log(rows);
      }
      else
      {
          console.log(err);
      }

      })

})

module.exports = Router;