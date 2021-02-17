const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "username is required"],
      unique: true,
      trim: true,
      minlength: 3,
      lowercase: true,
    },
    fullname: {
      type: String,
      required: [true, "Fullname is required"],
      minlength: 4,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: "Please enter a valid email",
      },
      required: [true, "Email required"],
    },
    city: {
      type: String,
      min: 2,
      max: 30,
      required: false,
    },
    county: {
      type: String,
      min: 2,
      max: 30,
      required: false,
    },
    postcode: {
      type: String,
      min: 2,
      max: 30,
      required: false,
    },
    phoneNumber: {
      type: Number,
      max: 11,
      min: 10,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.plugin(uniqueValidator, {message: 'is already taken.'});
const User = mongoose.model("User", userSchema);

module.exports = User;
