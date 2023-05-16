const db = require ("../../config/dbConfig.js");

// create main Model
const User=db.users

// 1.create user

const createUser=async(req,res)=>{

// console.log(req.body);
 const user=await User.create(req.body)
 res.status(200).send(user)
}

module.exports={
    createUser
}