const {createUser}=require("./controller");

const router = require('express').Router()

router.post("/CreateUser",createUser);
 
module.exports = router
 