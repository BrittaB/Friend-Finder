// Require/import the HTTP module
var http = require("http");
var app = require("express");
var path = require("path");

// Define a port to listen for incoming requests
var PORT = 8080;

// Create a generic function to handle requests and responses
function handleRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);



  // Listener
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });