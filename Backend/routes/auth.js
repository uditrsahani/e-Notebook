import express from "express";
const router = express.Router();
import User from "../models/User.js";
import bcrypt from "bcryptjs"


router.get("/", (req, res) => {
  let obj = {
    name: "Udit Sahani",
    rollNumber: 15,
    branch: "IT",
  };
  res.json(obj);
});

//post route
router.post("/singup", async (req, res) => {
  //data coming from body(frontend)
  const { name, email, password } = req.body;

  try {
    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    //Email Validation
    if (!email.includes("@")) {
      return res.status(400).json({ error: "Please enter a valid email" });
    }

    //Find Unique Use with email
    const user = await User.findOne({ email });

    if (user) {
      res.status(400).json({ error: "User already exits" });
    }


    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);


    //Save data into the database
    const newUser = await User({
      name,
      email,
      password: hashedPassword
    });

    await newUser.save();
    console.log(newUser);
    res.status(201).json({ success: "Signup Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error!");
  }
});

//get/regiter router

export default router;
