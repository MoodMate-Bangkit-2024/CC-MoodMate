const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  category: {
    type: String,
    enum: ["happy", "sadness", "fear", "anger"],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  link: { type: String, required: true },
});

module.exports = mongoose.model("Movie", movieSchema);
