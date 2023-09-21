const ADMIN_MIDDLEWARE = async (req, res) => {
  const user = req.user;
  const role = user.role;
  if (role != "admin") {
    return res.status(403).json({
      status: "failure",
      message: "You are not allowed to access this resource",
    });
  }
  next();
};
module.exports = ADMIN_MIDDLEWARE;
