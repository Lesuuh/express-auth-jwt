const express = require("express");
const userRouter = require("./routes/user.route");


const app = express();

// middlewares
app.use(express.json());


app.use("/user", userRouter)

module.exports = app;
