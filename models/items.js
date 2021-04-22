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
  timesUp: {type: Boolean, default: false},
  endDate: {type: String, required: true},
  bid: [
    {
      date: {type: String, default: ""},
      bidding: {type: String, default: ""},
      bidder: {type: String, default: ""}
    }
  ]
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;