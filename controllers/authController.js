// Models
const User = require("../models/user");

const Music = require("../models/music");

const Journal = require("../models/journal");

const Prompt = require("../models/prompt");
const Chat = require("../models/chat");

const path = require("path");

//JWT
const jwt = require("jsonwebtoken");

// The JWT is made of 3 part, which is headers -> which tells the server what type of signature is being used (meta), payload -> which used to identify the user (e.g. contains user id), and signature -> which makes the token secure (like a stamp of authenticity)
// The way they all work togeher is like this: when our server is creating the JWT after a user successfully loggedin or registered, then it creates the header part and payload parts first and encodes them both. Then, to sign the token or to add the signature, it takes both of those two parts, and it hashes them together with something called a secret (a secure secret string) stored on the server. This secret must remain a secret, because it's the key to unlocking the JWT and the only way to verify a token. So when those three things are hashed together, it creates the token signature. Then, the token signature is added to the end of the JWT after the other two part and it can be send to the browser. -> Headers.Payload.Signature -> the JWT then is added into a cookie and sent and stored in a browser.
// So for any subsequent request to the server, the token is then received by the server inside that cookie. The server than can verify this token on every request by looking at the header and the payload and hashing them with the secret which remembered is stored on the server. If the hashed value of those two things with the secret matches the signature which remembered is also the hashed value of thos two part and the secret, it knows then that it's valid and the JWT has not been tampered with on the client. If the JWT had been tampered with on the client, for example the data in the payload is modified, then those two part either the header or the payload would have been changed right? And when they're hashed together with the secret, the would not match whatever the token signature is. Therefore that's how we say you're not logged in / you're not authenticated anymore.

// error handler
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: "", username: "", password: "" };

  if (err.message === "Incorrect email") {
    errors.email = "This email has not been registered!";
  }

  if (err.message === "Incorrect password") {
    errors.email = "Incorrect email or password!";
  }

  if (err.code === 11000) {
    errors.email = "This email is already registered! Please login instead.";
    return errors;
  }

  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};
const maxAge = 3 * 24 * 60 * 60; //Three days in seconds unlike cookie which in miliseconds
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: maxAge });
};

module.exports.home_get = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/home.html"));
};

module.exports.register_post = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const user = await User.create({ email, username, password });
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    /*
    why do we need to specify the max age on the jwt signing and when we send the jwt as cookie?

    This sets the expiration time of the JWT itself. The JWT will become invalid after this period, meaning it cannot be used for authentication after it has expired. This is a critical security measure to limit the lifetime of a token and reduce the risk if it gets compromised.
    Cookie Expiration (maxAge option in res.cookie):

    This sets the expiration time of the cookie that stores the JWT. The cookie will be removed from the client (browser or mobile app) after this period, ensuring the client no longer sends an expired token to the server. Synchronizing this with the JWT expiration ensures that the token is not kept longer than its valid period.
    */
    const chat = await Chat.create({ author: user._id, prompts: [] });
    res
      .status(201)
      .json({ error: false, message: "User Created", user: user._id });
    // Now in the future, every request we make for other pages, that cookie with that JWT is going to be sent to the server. The server can later on use it to verify a user is logged in.
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ error: true, message: errors });
  }
};

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({
      error: false,
      message: "success",
      loginResult: { userId: user._id, name: user.username, token },
    });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ error: true, message: errors });
  }
};

// Recommendation
module.exports.get_recommendation = async (req, res) => {
  let { type, category } = req.params;

  if (type === "music") {
    try {
      const recommendation = await Music.find({
        category,
      });
      res.status(200).json({
        error: false,
        message: "success",
        type,
        category,
        data: recommendation,
      });
    } catch (err) {
      res.status(400).json({
        error: true,
        message: `Failed to query music recommendation - ${err}`,
      });
    }
  }
};

// Mood Prediction
const tf = require("@tensorflow/tfjs-node");
const predictMood = require("../services/inferenceService");

module.exports.get_user_journal = async (req, res) => {
  try {
    const user = req.user;
    const journals = await Journal.find({ author: user });
    journals.reverse();
    res.status(200).json({ error: false, message: "success", data: journals });
  } catch (err) {
    res
      .status(400)
      .json({ error: true, message: `Failed to get user's journals - ${err}` });
  }
};

module.exports.post_predict_mood = async (req, res) => {
  try {
    const model = await tf.loadLayersModel(process.env.JOURNAL_MODEL_URL);

    const { title, text } = req.body;

    const { mood } = await predictMood(model, text);

    const journal = new Journal({ title, text, mood });
    journal.author = req.user;
    // Convert today's date
    const dayNames = [
      "Minggu",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jumat",
      "Sabtu",
    ];

    const monthNames = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];

    function formatDateToIndonesian(date) {
      const dayName = dayNames[date.getDay()];
      const day = date.getDate();
      const monthName = monthNames[date.getMonth()];
      const year = date.getFullYear();

      return `${dayName}, ${day} ${monthName} ${year}`;
    }

    const now = new Date(Date.now());
    journal.createdAt = formatDateToIndonesian(now);

    await journal.save();

    res.status(200).json({
      error: false,
      message: "success",
      data: journal,
    });
  } catch (err) {
    res.status(400).json({
      error: true,
      message: `Failed to predict moood - ${err}`,
    });
  }
};

// Chat Bot
module.exports.get_user_chat = async (req, res) => {
  try {
    const user = req.user;
    const { id } = req.params; // User ID not Chat ID
    if (user === id) {
      const chat = await Chat.findOne({ author: user }).populate("prompts");
      return res
        .status(400)
        .json({ error: false, message: "success", data: chat.prompts });
    } else {
      throw "You don't have access to this chat resource";
    }
  } catch (err) {
    res
      .status(400)
      .json({ error: true, message: `Failed to query user chat - ${err}` });
  }
};

module.exports.post_user_prompt = async (req, res) => {
  try {
    /* const model = await tf.loadLayersModel(process.env.CHATBOT_MODEL_URL); */

    const { prompt } = req.body;
    const promptAndResponse = new Prompt({ prompt });
    promptAndResponse.moodmateResponse =
      "Halo user! Saya moodmate siap membantu!";
    promptAndResponse.author = req.user;

    const { id } = req.params;
    const chat = await Chat.findOne({ author: id });
    chat.prompts.push(promptAndResponse);

    await promptAndResponse.save();
    await chat.save();
    /* const { mooodmateResponse } = await predictMood(model, prompt); */

    res.status(200).json({
      error: false,
      message: "success",
      data: promptAndResponse,
    });
  } catch (err) {
    res.status(400).json({
      error: true,
      message: `Failed to get moodmate response - ${err}`,
    });
  }
};
