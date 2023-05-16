const express = require('express')
const cors = require('cors')
const indexRouter =require("./src/routes/index").routes

const app = express()

// middleware

app.use(express.json())

app.use(express.urlencoded({ extended: true }))


// routers
app.use("/api",indexRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.status(404).json({
      message: "No such route exists",
    });
  });
// const reviewOrder=require("./src/routes/order/orderRouter")
// app.use("/api/orders",reviewOrder)

// const user=require("./src/routes/user/userRouter")
// app.use("/api/user",user)

//static Images Folder

// app.use('/Images', express.static('./Images'))


//port

const PORT = process.env.PORT || 8080

//server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})