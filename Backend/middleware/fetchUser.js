import 'dotenv/config';
import jwt from 'jsonwebtoken';

 const JWT_SECRET = process.env.JWT_SECRET;

const fetchUser = (req, res, next) =>{
  //get the use from the jwt token and add id to req object
  const token = req.header('auth-token');

  if(!token){
    res.status(401).send({error: "Please authenticate using a valid token"});
  }

  try{
    const {userId} = jwt.verify(token, JWT_SECRET);
    req.userId = userId;
    console.log("fetchuser", userId);
    next();
  }catch(error){
    res.status(401).send({error: "Please autheticate using a valid token!"});
  }
}

export default fetchUser;