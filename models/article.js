const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  category: {
    type: String,
    enum: ["happy", "sadness", "fear", "anger"],
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

module.exports = mongoose.model("Article", articleSchema);
