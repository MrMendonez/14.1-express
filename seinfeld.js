// Given the following data below, create a MySQL databse with a table populating with the given data.

// |id| name | coolness_points | attitude | |--|-------| ---------- |------| 
// |1 |"Jerry"|75|"Relaxed"|
// |2 |"Elaine"|65|"Righteous"|
// |3 |"Kramer"|5|"Doofus"|
// |4 |"George"|25|"Selfish"|

// Create a Node App with Express and MySQL npm.

// Create 3 Express routes:
// Create a '/cast' route that will display all the names from the table order by id
// Create a '/coolness-chart' route that will display all cast members and their coolness_points in the order from top to bottom
// Create a '/attitude-chart/:type' route that will display the name from the table if the param matches attitude to on any row in the table

var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
  port: 3306,
  host: 'localhost',
  user: 'root',
  database: 'attitude'
});

connection.connect(function(err) {
  if(err) {
    console.log("Error", err.stack);
  }

  console.log("Connected as id: %s", connection.threadId)
})

var PORT = process.env.NODE_ENV || 9001;

app.get('/cast', function(req, res) {
  connection.query("SELECT id, name FROM attitude;", function(err, result) {
    res.send(result);
  });
});

app.get('/coolness-chart', function(req, res) {
  connection.query("SELECT name, coolness_points FROM attitude order by coolness_points desc;", function(err, result) {
    res.send(result);
  });
});

app.get('/attitude-chart/:type', function(req, res) {
  var type = req.params.type;
  console.log(type);
  var query = "SELECT name FROM attitude WHERE attitude = '" + type + "';";

  connection.query(query, function(err, result) {
    res.send(result);
  });

});

app.listen(PORT, function() {
  console.log("Listening at %s", PORT);
});