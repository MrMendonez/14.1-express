// Create you own Ben and Jerry App:

// Create 5 different kinds of icecream, each with a different price and scale of awesomeness. Put the following variable in your 'index.js'  var icecreams = [ {name: 'vanilla', price: 10, awesomeness: 3}, {name: 'chocolate', price: 4, awesomeness: 8}, {name: 'banana', price: 1, awesomeness: 1}, {name: 'greentea', price: 5, awesomeness: 7}, {name: 'jawbreakers', price: 6, awesomeness: 2}, ]; 
// Do not use MySQL keep all the data in the index.js file
// Using handlebars and Express create a route for each of the ice cream you created
// When the icecreams route is hit, it will render the name, price, and awesomeness of that ice cream.

// var express = require('express');
// var app = express();
// var exppressHandlebars = require('express-handlebars');
// var index = require('./index');

// var PORT = process.env.NODE_ENV || 9001;

// app.get('/name/price/awesomeness', function(req, res) {
//   var data = {
//     name: 'vanilla',
//     price: 10,
//     awesomeness: 3 
//   }
//   res.render('main', data);
// });

// app.listen(PORT, function() {
//   console.log("Listening at %s", PORT);
// });

// Dave's Solution

var express = require('express')
var app = express()
var expressHandlebars = require('express-handlebars')
var PORT = 8090
app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var icecreams = [ {name: 'vanilla', price: 10, awesomeness: 3},
{name: 'chocolate', price: 4, awesomeness: 8},
{name: 'banana', price: 1, awesomeness: 1},
{name: 'greentea', price: 5, awesomeness: 7},
{name: 'jawbreakers', price: 6, awesomeness: 2}, ];

app.get('/vanilla', function(req,res){
  res.render('icecream', icecreams[0])
});

app.get('/chocolate', function(req,res){
  res.render('icecream', icecreams[1])

});

app.get('/banana', function(req,res){
  res.render('icecream', icecreams[2])

});

app.get('/greentea', function(req,res){
  res.render('icecream', icecreams[3])

});

app.get('/jawbreakers', function(req,res){
  res.render('icecream', icecreams[4])

});
app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});