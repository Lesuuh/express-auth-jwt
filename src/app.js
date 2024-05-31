const express = require("express");
const userRouter = require("./routes/user.route");
const authRouter = require("./routes/auth.route");


const app = express();

// middlewares
app.use(express.json());

app.use("/user", userRouter)
app.use("/auth", authRouter)

module.exports = app;
