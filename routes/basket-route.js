const router = require("express").Router();
let Basket = require("../models/basket");

router.route("/").get((req, res) => {
    Basket.find()
      .then((items) => res.json(items))
      .catch((err) => res.status(400).json("Error: " + err));
  });

router.post("/add", (req, res) => {
    Basket.create(req.body)
      .then(() => res.json("Item added to basket!"))
      .catch((err) => res.status(400).json("Error: " + err));
  });

module.exports = router;