const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/user.js");

const registerUser = async (req, res) => {
  const { name, email } = req.body;
  const plainTextPassword = req.body.password;
  console.log(name, email, plainTextPassword);
  //validation
  const alreadyRegisteredUser = await User.findOne({ email });
  if (alreadyRegisteredUser) {
    return res.status(404).json({
      status: "failure",
      message: "User already registered",
    });
  }
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(plainTextPassword, salt);
  const newUser = new User({ name, email, password: password, role: "user" });
  await newUser.save();
  return res.json({
    status: "success",
    message: "user registered successfully",
  });
};

const loginUser = async (req, res) => {
  const email = req.body.email;
  const plainTextPassword = req.body.password;
  //validation
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({
      status: "failure",
      message: "user is not yet registered, please register first",
    });
  }
  const password = user.password;
  const isPasswordValid = await bcrypt.compare(plainTextPassword, password);
  console.log(isPasswordValid);
  if (!isPasswordValid) {
    return res
      .status(404)
      .json({ status: "failure", message: "invalid email or password" });
  }
  const { name, role, _id } = user;
  const tokenPayload = {
    name,
    email,
    role,
    _id,
  };
  const token = jwt.sign(tokenPayload, process.env.JWT_SECRET);
  await User.findOneAndUpdate(user._id, { token });
  return res.json({ status: "success", token });
};

const logoutUser = async (req, res) => {
  const token = req.headers.authorization;
  //validation
  const decodedToken = jwt.decode(token);
  const id = decodedToken._id;
  const user = await User.findByIdAndUpdate(id, { token: "" });
  return res.json({ status: "success", message: "logged out successfully" });
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
};
