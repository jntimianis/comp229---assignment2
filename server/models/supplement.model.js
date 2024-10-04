import mongoose from "mongoose";
//const mongoose = require('mongoose');
const SupplementSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Name is required",
  },
  created: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
    trim: true,
    required: 'Description is required'
  },
  quantity: {
    type: Number,
    trim: true,
    required: 'Quantity is required'
  },
  price: {
    type: Number,
    trim: true,
    required: 'Price is required'
  },
  updated: {
    type: Date,
    default: Date.now,
  },
});
//module.exports = mongoose.model('User', UserSchema);
export default mongoose.model("Supplement", SupplementSchema);
