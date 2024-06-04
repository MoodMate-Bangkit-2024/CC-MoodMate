const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { isEmail } = require("validator");

const bcrypt = require("bcrypt");

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email field is required!"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email!"],
  },
  username: {
    type: String,
    required: [true, "Username field is required!"],
  },
  password: {
    type: String,
    required: [true, "Password field is required!"],
    minlength: [6, "Password must have at least 6 characters!"],
  },
});

// invoke hash function after document saved to database

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// .this refers to local instance that have been created before being saved on to the database, that's why if you're using pre hook, you don't have access to doc object, and also that's why you should use regular function instead of arrow function when using pre hook

module.exports = mongoose.model("User", userSchema);
