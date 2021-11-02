const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema({
  product: String,
  date: Date,
  day: String,
  produced: Number,
  sold: Number,
  leftover: Number
});

const Sales = mongoose.model("Sales", salesSchema);

module.exports = {
  model: Sales,
  schema: salesSchema
};
