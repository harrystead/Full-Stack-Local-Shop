const router = require("express").Router();
let Details = require("../models/details");

router.route("/").get((req, res) => {
    Details.find()
      .then((details) => res.json(details))
      .catch((err) => res.status(400).json("Error: " + err));
  });

  router.post("/add", (req, res) => {
    const fullname = req.body.fullname;
    const homeaddress = req.body.homeaddress;
    const postcode = req.body.postcode;
    const phonenumber = req.body.phonenumber;
    const description = req.body.description;
    const author = req.body.author;
  
    const newDetails = new Details({
      fullname,
      homeaddress,
      postcode,
      phonenumber,
      description,
      author,
    });
  
    newDetails
      .save()
      .then(() => res.json("Details added!"))
      .catch((err) => res.status(400).json("Error: " + err));
  });

  module.exports = router;