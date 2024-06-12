const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const journalSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Author field is required!"],
  },
  createdAt: {
    type: String,
  },
  updatedAt: {
    type: String,
  },
  title: {
    type: String,
    required: [true, "Title field is required!"],
  },
  text: {
    type: String,
    required: [true, "Text field is required!"],
  },
  mood: {
    type: String,
    required: [true, "Mood field is required!"],
  },
});

module.exports = mongoose.model("Journal", journalSchema);
