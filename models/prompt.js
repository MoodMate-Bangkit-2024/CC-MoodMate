const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const promptSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: String,
  moodmateResponse: String,
});

module.exports = mongoose.model("Prompt", promptSchema);
