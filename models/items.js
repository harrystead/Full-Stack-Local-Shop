const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: { type: String },
  category: { type: String },
  quality: { type: String },
  date: { type: String },
  price: {type: String},
  description: { type: String },
  selectedPic: { type: String},
  contact: {type: String},
  author: {type: String},
  bid: {type: Array},
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;