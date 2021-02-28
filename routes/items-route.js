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
  Item.find()
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
  const author = req.body.author;

  const newItem = new Item({
    name,
    category,
    quality,
    date,
    price,
    description,
    selectedPic,
    author,
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

module.exports = router;
