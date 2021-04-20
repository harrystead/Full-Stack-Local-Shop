const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: { type: String, required: true},
  category: { type: String, required: true},
  quality: { type: String, required: true },
  date: { type: String },
  price: {type: String, required: true},
  description: { type: String },
  selectedPic: { type: String, required: true},
  contact: {type: String, required: true},
  author: {type: String, required: true},
  endDate: {type: String, required: true},
  bid: {type: Array},
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;