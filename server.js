const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint that listens for POST requests and returns the JSON data
app.post('/api/upsert', (req, res) => {
    const jsonData = req.body;
    // Log the jsonData.
    console.log(jsonData);
    res.json(jsonData);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

