const express = require("express");

const router = express.Router();
require("../db/connection");
const User = require("../model/userschema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  res.send("hello from the server");
});

// -----Async & await ----

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  //query
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "all the field are required" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "user already exists" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "password are not matching" });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });
      const userRegister = await user.save();
      res.status(201).json({ success: "user created successfully" });
    }
    // If key and value are samet than

    // Passwording Hashing
    //Pre & post

    // await user.save();
    // res.status(201).json({ success: "user created successfully" });
  } catch (err) {
    console.log(error);
  }

  // console.log(req.body);
  res.json({ message: req.body });
});

// //----Promises ---
// router.post("/register", (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;

//   //query
//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({ error: "all the field are required" });
//   }

//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ error: "user already exists" });
//       }
//       // If key and value are same than
//       const user = new User({ name, email, phone, work, password, cpassword });
//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ success: "user created successfully" });
//         })
//         .catch((error) => {
//           res.status(500).json({ error: "registration failed" });
//         });
//     })
//     .catch((error) => {
//       console.log(error);
//     });

//   console.log(req.body);
//   //   res.json({ message: req.body });
// });

//Login Route

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "email and password required" });
    }

    const userlogin = await User.findOne({ email: email });
    console.log(userlogin);

    if (userlogin) {
      const isMatch = await bcrypt.compare(password, userlogin.password);
      const generatedToken = await userlogin.generateAuthToken();
      console.log(generatedToken);
      res.cookie("jwtToken", generatedToken, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json([{ message: "user pass not found" }]);
      } else {
        res.json([{ message: "user Sign in successful" }]);
      }
    } else {
      res.status(400).json([{ message: "user email not found" }]);
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
