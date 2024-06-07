const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  prompts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Prompt",
    },
  ],
});

module.exports = mongoose.model("Chat", chatSchema);
