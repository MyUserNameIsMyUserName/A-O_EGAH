// Express
const compression = require("compression");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const PORT = 7777;

const STATIC = path.resolve(__dirname, "PUBLIC");
const INDEX = path.resolve(STATIC, "index.html");


const app = express();
app.use(bodyParser.json());

// compress all responses
app.use(compression());
// Static content
app.use(express.static(STATIC));

// Start server
app.listen(PORT, function () {
    console.log("Server up and running on http://localhost:" + PORT + "/");
});