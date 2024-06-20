import express from "express"
import connectMongo from "./dabatase/db.js"
import  auth from "./routes/auth.js";
import  notes from "./routes/notes.js";
import cors from 'cors'


const app = express();
const port = 4003;

//calling database connection function
connectMongo();

//middleware
app.use(express.json())
app.use(cors())

//importing routes
app.use('/api/auth', auth)
app.use('/api/notes', notes)

//port
app.listen(port, ()=>{
  console.log(`App is running on port ${port}`);
})