const express = require("express");

const router = express.Router();
require("../db/connection");
const User = require("../model/userschema");

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
    }
    // If key and value are samet than
    const user = new User({ name, email, phone, work, password, cpassword });
    const userRegister = await user.save();
    // await user.save();
    // res.status(201).json({ success: "user created successfully" });

    if (userRegister) {
      res.status(201).json({ success: "user created successfully" });
    } else {
      res.status(500).json({ error: "registration failed" });
    }
  } catch (err) {
    console.log(error);
  }

  console.log(req.body);
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
    if (!userlogin) {
      res.status(400).json([{ message: "user not found" }]);
    } else {
      res.json([{ message: "user Sign in successful" }]);
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
