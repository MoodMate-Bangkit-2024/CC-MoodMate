const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const musicSchema = new Schema({
  category: {
    type: String,
    enum: ["happy", "sadness", "fear", "anger"],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  singer: {
    type: String,
    required: true,
  },
  link: { type: String, required: true },
});

module.exports = mongoose.model("Music", musicSchema);
