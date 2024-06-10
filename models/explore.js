const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exploreSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  link: { type: String, required: true },
});

module.exports = mongoose.model("Explore", exploreSchema);
