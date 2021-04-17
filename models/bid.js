const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bidSchema = new Schema({
  bid: { type: Number, required: true },
  userId: { type: String, required: true },
});

const Bid = mongoose.model('Bid', bidSchema);
module.exports = Bid;