const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();

//.env config
dotenv.config({ path: "./config.env" });
require("./db/connection");

app.use(express.json());

const PORT = process.env.PORT;

// const User = require("./model/userschema");
// app.use(require() );

// link router files with app.js
app.use(require("./router/auth"));

//Middleware

const middleware = (req, res, next) => {
  console.log("hello from middleware");
  next();
};

//Routing

app.get("/", (req, res) => {
  res.send("hello from the server");
});

app.get("/about", middleware, (req, res) => {
  console.log("hello from About");

  res.send("hello from the about");
});

app.get("/contact", (req, res) => {
  res.send("hello from the contact");
});

app.get("/signin", (req, res) => {
  res.send("hello from the signin");
});

app.get("/signup", (req, res) => {
  res.send("hello from the signup");
});

app.listen(PORT, () => {
  console.log("listening at " + PORT);
});
