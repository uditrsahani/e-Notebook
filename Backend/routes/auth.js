import express from 'express';
const router = express.Router();
import User from '../models/User.js'

router.get('/', (req, res)=>{
  let obj = {
    name: "Udit Sahani",
    rollNumber: 15,
    branch: 'IT'
  }
  res.json(obj)
})

//post route
router.post('/', (req, res)=>{
  const user = User(req.body)
  user.save()
  res.send(req.body)
})

//get/regiter router


export default router;