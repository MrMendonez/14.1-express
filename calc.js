// Calculator App exercise:

// Create an node.js application.
// Install the Express npm package.
// Using Express create a server, with one GET route.
// The route will consist of three parameters, an operation, a number, a second number.
// Create these four math operations addition, subtraction, multiplication, division.
// When the route is hit, it should display on the page result of the math operation.
// Example: If my port is 3000, entering the following URL into my browser.

// http://localhost:3000/addition/10/1
// The page will display 11.

var express = require('express');
var app = express();
var PORT = 8090;
app.get("/addition/:var1/:var2", function(req, res) {
  var x = parseInt(req.params.var1)
  var y = parseInt(req.params.var2)
  var response = x + y
  res.sendStatus(response)
});
app.get("/subtract/:var1/:var2", function(req, res) {
  var x = parseInt(req.params.var1)
  var y = parseInt(req.params.var2)
  var response = x + y
  res.sendStatus(response)
});
app.get("/multiply/:var1/:var2", function(req, res) {
  var x = parseInt(req.params.var1)
  var y = parseInt(req.params.var2)
  var response = x + y
  res.sendStatus(response)
});
app.get("/divide/:var1/:var2", function(req, res) {
  var x = parseInt(req.params.var1)
  var y = parseInt(req.params.var2)
  var response = x + y
  res.sendStatus(response)
});
app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});
