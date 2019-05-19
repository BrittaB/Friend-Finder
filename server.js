// Require/import the HTTP module
const http = require("http");
const app = require("express");
const path = require("path");

// Define a port to listen for incoming requests
const PORT = 8080;

// Create a generic function to handle requests and responses
function handleRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
const server = http.createServer(handleRequest);



  // Listener
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });