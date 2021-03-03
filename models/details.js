const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const detailsSchema = new Schema({
  fullname: { type: String },
  homeaddress: { type: String },
  postcode: { type: String },
  phonenumber: { type: String },
  description: { type: String },
  author: {type: String},
}, {
  timestamps: true,
});

const Details = mongoose.model('Details', detailsSchema);
module.exports = Details;