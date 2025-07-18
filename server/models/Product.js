// server/models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  images: [String],
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
