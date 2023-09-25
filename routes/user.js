const express = require("express");
const router = new express.Router();
const userController = require("../controller/user.js");
const authMiddleware = require("../middleware/auth.js");

router.post("/register", userController.registerUser);

router.post("/login", userController.loginUser);

router.post("/logout", authMiddleware, userController.logoutUser);

router.post("/updatePassword", authMiddleware, userController.updatePassword);

module.exports = router;
