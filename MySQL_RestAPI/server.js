const express = require("express");
const bodyParser = require("body-parser");
const mysqlConnection = require("./connection");

//Select Query Route
const PeopleRoutes = require("./routes/people");
//Insert Query Route
const InsertRoutes = require("./routes/insert");
//Put Query Route
const UpdateRoutes = require("./routes/put");
//Delete Query Route
const DeleteRoutes = require("./routes/delete");

var app = express();
app.use(bodyParser.json());

//For Select Query
app.use("/people", PeopleRoutes);
//For Insert Query
app.use("/insert", InsertRoutes);
//For Update Query
app.use("/put", UpdateRoutes);
//For Delete Query
app.use("/delete", DeleteRoutes);

app.listen(8080);