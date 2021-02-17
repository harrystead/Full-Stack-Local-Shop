const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  quality: { type: String, required: true },
  date: { type: String, required: true },
  price: {type: String, required: true},
  description: { type: String, required: true },
  selectedPic: {type: String, required: true},
  author: { type: String, ref: 'User' },
}, {
  timestamps: true,
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;