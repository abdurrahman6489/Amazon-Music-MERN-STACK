const jwt = require("jsonwebtoken");
const User = require("../model/user.js");

const AUTH_MIDDLEWARE = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(404).json({
      status: "failure",
      message: "Please pass token in Authorization header",
    });
  }
  try {
    jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({
      status: "failure",
      message: "invalid jwt",
    });
  }
  const decodedToken = jwt.decode(token);
  const id = decodedToken._id;
  const user = await User.findById(id);
  if (!user.token || user.token !== token) {
    return res.status(403).json({
      status: "failure",
      message: "Please login to access this resource",
    });
  }
  req.user = user;
  next();
};

module.exports = AUTH_MIDDLEWARE;
