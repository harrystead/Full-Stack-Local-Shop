const router = require("express").Router();
const express = require('express');
const app = express();
const { response } = require("express");
let User = require("../models/user");

router.route("/").get((req, res) => {
    User.find()
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const fullname = req.body.fullname;
    const username = req.body.username;
    const email = req.body.email;
    const city = req.body.city;
    const county = req.body.county;
    const postcode = req.body.postcode;
    const number = req.body.number;
  
    const newUser = new User({
      fullname,
      username,
      email,
      city,
      county,
      postcode,
      number,
    });
  
    newUser
      .save()
      .then(() => res.json("User added!"))
      .catch((err) => res.status(400).json("Error: " + err));
  });

  
  app.get("/:id", (req, res) => {
    User.find({
      where:
      {
        _id: req.params.id
      }
    }).catch(error=> console.log(error))
  })

  module.exports = router;