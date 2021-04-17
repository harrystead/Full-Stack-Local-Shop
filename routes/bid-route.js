const router = require("express").Router();
let Bid = require("../models/bid");

router.route("/").get((req, res) => {
  Bid.find()
    .then((bid) => res.json(bid))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  Bid.create(req.body)
    .then(() => res.json("Bid has been added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:itemId").get((req, res) => {
  Bid.find({
    itemId: req.params.itemId,
  })
    .then((itemId) => res.json(itemId))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
