const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE;
const PORT = process.env.PORT;

mongoose
  .connect(DB)
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log("no connection"));

//Middleware

const middleware = (req, res, next) => {
  console.log("hello from middleware");
  next();
};

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
