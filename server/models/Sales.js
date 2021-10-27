const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema({
  product: { type: String, unique: true },
  date: { type: Date, default: Date.now, unique: true },
  day: { type: String, unique: true },
  produced: Number,
  sold: Number,
  leftover: Number
});

const Sales = mongoose.model("Sales", salesSchema);

module.exports = {
  model: Sales,
  schema: salesSchema
};
