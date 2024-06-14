import {connect } from "mongoose";

const connectMongo = async () =>{
  try{
    await connect('mongodb+srv://uditrsahani:123Vg%40@e-notebook-mern-databas.kcbwicv.mongodb.net/eNotebook')
    console.log('---***Database Connected Successfully***---')
  }catch(error){
    console.log(error);
  }
}

export default connectMongo;