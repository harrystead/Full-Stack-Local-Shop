const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Item = mongoose.model('Item', exerciseSchema);

module.exports = Item;