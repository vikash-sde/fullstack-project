const express = require("express");

const router = express.Router();
require("../db/connection");
const User = require("../model/userschema");

router.get("/", (req, res) => {
  res.send("hello from the server");
});

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  //query
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "all the field are required" });
  }

  try {
    const userExist = User.findOne({ email: email });
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
  //   res.json({ message: req.body });
});

// router.post("/register", (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;

//   //query
//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({ error: "all the field are required" });
//   }
//   // Promises
//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ error: "user already exists" });
//       }
//       // If key and value are samet than
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

module.exports = router;
