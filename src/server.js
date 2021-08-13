"use strict";
const express = require("express");
const app = express();
const registerRoutes = require("./routes");
const cors = require("cors");
const path = require("path");

// server config
const port = process.env.PORT || 3000;

app.use(cors());

// app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));

// register routes
registerRoutes(app);

// create server start method
const start = () => {
  return new Promise((resolve, reject) => {
    // start the server
    app.listen(port, () => {
      console.log(`Connected to Port ${port}`);
      resolve();
    });
  }).catch((error) => {
    console.log(`failed to start server => ${error.message}`);
  });
};

module.exports = start;
