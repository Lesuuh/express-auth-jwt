const Users = require("../models/user.model");

async function httpRegister(req, res) {
  const { username, email, password } = req.body;
  // validation

  if (!username || !email || !password) {
    return res.status(400).json({ message: "Please provide all fields" });
  }

  //   find user by email
  const userExists = await Users.findOne({ email });

  if (userExists) {
    res.status(400).json({ message: "Email already exist" });
  }

  //   if user does not exist, create user
  const newUser = new Users({ username, email, password });
  await newUser.save();
}

module.exports = httpRegister;
