const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const detailsSchema = new Schema({
  fullname: { type: String, required: true },
  homeaddress: { type: String, required: true },
  postcode: { type: String, required: true },
  phonenumber: { type: String, required: true },
  description: { type: String, required: true },
  author: {type: String, required: true},
});

const Details = mongoose.model('Details', detailsSchema);
module.exports = Details;