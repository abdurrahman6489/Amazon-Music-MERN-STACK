const mongoose = require("mongoose");

const userSchema = {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: false,
    default: "",
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
};

const User = mongoose.model("user", userSchema);
module.exports = User;
