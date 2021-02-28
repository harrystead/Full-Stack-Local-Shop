const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema(
  {
    username: {
      type: String,
    },
    fullname: {
      type: String,
    },
    email: {
      type: String,
    },
    city: {
      type: String,
    },
    county: {
      type: String,
    },
    postcode: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.plugin(uniqueValidator, {message: 'is already taken.'});
const User = mongoose.model("User", userSchema);

module.exports = User;
