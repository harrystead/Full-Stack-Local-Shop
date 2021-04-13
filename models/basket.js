const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const basketSchema = new Schema({
  name: { type: String },
  category: { type: String },
  quality: { type: String },
  date: { type: String },
  price: {type: String},
  description: { type: String },
  selectedPic: { type: String},
  contact: {type: String},
  author: {type: String},
});

const Basket = mongoose.model('Basket', basketSchema);
module.exports = Basket;