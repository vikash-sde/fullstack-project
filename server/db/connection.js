const mongoose = require("mongoose");

const DB = process.env.DATABASE;

//connection b/w express and mongodb
mongoose
  .connect(DB)
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log("no connection"));
