const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");

Router.get("/", (req,res)=>{
      mysqlConnection.query("SELECT * from people  ", (err, rows, fields)=>{
      if(!err)
      {
          res.send(rows);
          console.log(rows);
      }
      else
      {
          console.log(err);
      }

      })

})

module.exports = Router;
