const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const endpointsToEcho = ['/api/upsert', '/api/deletebyid'];

// Since we always echo the data, create a generic for this.
const echoResponse = (req, res) => {
  const jsonData = req.body;
  console.log(jsonData);
  res.json(jsonData);
};

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Set of endpoints to echo
endpointsToEcho.forEach((path) => {
  app.post(path, echoResponse);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

