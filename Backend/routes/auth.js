import express from "express";
const router = express.Router();
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import "dotenv/config";
import jwt from "jsonwebtoken";
import fetchUser from '../middleware/fetchUser.js'

const JWT_SECRET = process.env.JWT_SECRET;

router.get("/", (req, res) => {
  let obj = {
    name: "Udit Sahani",
    rollNumber: 15,
    branch: "IT",
  };
  res.json(obj);
});

//Singup API
router.post("/signup", async (req, res) => {
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
      password: hashedPassword,
    });

    await newUser.save();
    console.log(newUser);
    res.status(201).json({ success: "Signup Successfully" });
  } catch (error) {
    console.log(error + 'aa');
    res.status(500).send("Internal Server Error!");
  }
});

//* Login API

router.post("/login", async (req, res) => {
  //dat coming from body(frontend)
  const { email, password } = req.body;

  try {
    //validation
    if (!email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    //email validation
    if (!email.includes("@")) {
      return res.status(201).json({ error: "Please enter a valida email" });
    }

    //find unique user with email
    const user = await User.findOne({ email });
    console.log(user);

    //if user not exits with that email
    if (!user) {
      res.status(400).json({ error: "User Not Found" });
    }

    //matching user password to hash password with bcrypt.compare()
    const doMatch = await bcrypt.compare(password, user.password);
    console.log(doMatch);

    //If match password then generate toke
    if (doMatch) {
      const token = jwt.sign({ userId: user.id }, { JWT_SECRET }.JWT_SECRET, {
        expiresIn: "7d",
      });
      res.status(201).json({ token });
    } else {
      res.status(404).json({ error: "Email And Password Not Found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

router.post('/getuser', fetchUser, async(req, res)=>{
  try{
    const userId = req.userId;
    console.log("getuser Id", userId);
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch(error){
    console.log(error.message)
    res.console(500).send("Internal server error!");
  }
})

export default router;
