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

// Invoke hash function after document saved to database
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
// .this refers to local instance that have been created before being saved on to the database, that's why if you're using pre hook, you don't have access to doc object, and also that's why you should use regular function instead of arrow function when using pre hook

// Static method to log in user
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  // .this in this static function doesn't refer to the document instance itself, rather it refers to the user model.

  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("Incorrect password");
  }

  throw Error("Incorrect email");
};

module.exports = mongoose.model("User", userSchema);
