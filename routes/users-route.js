const router = require("express").Router();
let User = require("../models/user");
const bcrypt = require('bcrypt')

router.get("/", (req, res) => {
  User.find()
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post('/add', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const newUser = new User({
      fullname: req.body.fullname,
      email: req.body.email,
      password: hashedPassword
    })
    newUser.save()
    .then((response)=> {
      console.log(response)
    })
  } catch(error) {
    console.log(error)
  }
})

// router.route("/:username").get((req, res) => {
//   User.find({
//     username: req.params.username,
//   })
//     .then((user) => res.json(user))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

module.exports = router;
