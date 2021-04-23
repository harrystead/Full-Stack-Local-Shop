const router = require("express").Router();
let Item = require("../models/items");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

// const upload = multer({dest: 'C:/Users/44794/Documents/full-stack-local-shop/client/src/uploads/',})

router.route("/").get((req, res) => {
  Item.find({timesUp: true})
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/add", upload.single("selectedPic"), (req, res) => {
  console.log(req.file);
  const name = req.body.name;
  const category = req.body.category;
  const quality = req.body.quality;
  const date = req.body.date;
  const price = req.body.price;
  const description = req.body.description;
  const selectedPic = req.file.path;
  const contact = req.body.contact;
  const author = req.body.author;
  const endDate = req.body.endDate;

  const newItem = new Item({
    name,
    category,
    quality,
    date,
    price,
    description,
    selectedPic,
    contact,
    author,
    endDate,
  });

  newItem
    .save()
    .then(() => res.json("Item added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:author").get((req, res) => {
  Item.find({
    author: req.params.author,
  })
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Item.findByIdAndDelete(req.params.id)
    .then(() => res.json("Item deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").put((req, res) => {
  Item.updateMany(
    { _id: req.params.id },
    { $push: { bid: req.body },
  }, 
    function (err, doc) {
      if (err) return res.send(500, { error: err });
      return res.send("Succesfully saved.");
    }
  );
});

router.route("/updateTime/:id").put((req, res) => {
  Item.findByIdAndUpdate(
    { _id: req.params.id },
    { timesUp: true, finalBid: req.body},
    function (err, doc) {
      if (err) return res.send(500, { error: err });
      return res.send("Succesfully update.");
    }
  );
});

router.route("/listEnded/time/:id").get((req, res) => {
  Item.find({'finalBid.bidder': req.params.id, timesUp: true})
  .then((items) => res.json(items))
  .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/listEnded/sold/:id").get((req, res) => {
  Item.find({'author': req.params.id, timesUp: true})
  .then((items) => res.json(items))
  .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
