const Users = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function httpLogin(req, res) {
  try {
    const { email, password } = req.body;

    // check if email matches
    const user = await Users.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // if email matches an email in the database, check whether the password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // get payload
    const payload = { UserId: user._id };

    // generate the token
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // respond by setting the header
    res.setHeader("Authorization", `Bearer ${accessToken}`);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
}

modules.exports = httpLogin