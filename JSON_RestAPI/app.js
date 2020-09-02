const express = require("express");
const bodyParser = require("body-parser");

const App = express();
//
App.use(bodyParser.urlencoded({extended: false}));
//
App.use(bodyParser.json());

let people = {people : [{ name : "Shantanu"} ]}
//GET Method
App.get("/people", function(req, res){
    //MongoDB
    res.json(people);
    res.end();
});
//POST Method
App.post("/people", function(req, res){
    //MongoDB
    if(req.body && req.body.name)
    {
        people.people.push({ name : req.body.name })
    }
    console.log(req.body.name);
    res.json(people);
    res.end();
});
//PUT Method
App.put("/people", function(req, res){
    //MongoDB
    if(req.body && req.body.name)
    {
        people.people.push({ name : req.body.name })
    }
    console.log(req.body.name);
    res.json(people);
    res.end();
});
//Delete Method
App.delete("/people", function(req, res){
    //MongoDB
    if(req.body && req.body.name)
    {
        people.people.push({ name : req.body.name })
    }
    console.log(req.body.name);
    res.json(people);
    res.end();
});
//Multiple parameters
App.get("/people/:name/:age", function(req, res){
    //MongoDB
    console.log(req.params.name);
    console.log(req.params.age);
    res.json({name : req.params.name, age : req.params.age});
    res.end();
});

console.log("Server Started At Port 3000");
App.listen(3000);