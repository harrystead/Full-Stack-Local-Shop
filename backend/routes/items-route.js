const router = require("express").Router();
let Item = require("../models/items");

router.route("/").get((req, res) => {
  Item.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const name = req.body.name;
    const category = req.body.category;
    const quality = req.body.quality;
    const date = req.body.date;
    const price = req.body.price;
    const description = req.body.description;
    const selectedPic = req.body.selectedPic;
  
    const newItem = new Item({
      name,
      category,
      quality,
      date,
      price,
      description,
      selectedPic,
    });
  
    newItem
      .save()
      .then(() => res.json("Item added!"))
      .catch((err) => res.status(400).json("Error: " + err));
  });

  module.exports = router;
