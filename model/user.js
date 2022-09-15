const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("user", {
  Name: { type: String, require: true, trim: true },
  Phone: { type: Number, require: true, minlength: 10, trim: true },
  Email: {
    type: String,
    require: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  Hobbies: { type: String, require: true, trim: true }
});

module.exports= User