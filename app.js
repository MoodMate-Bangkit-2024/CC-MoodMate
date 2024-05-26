if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

/* Express */
const express = require("express");
const app = express();
const port = 3000;

/* Mongoose */
const mongoose = require("mongoose");

const path = require("path");

/* Mongoose Models */
const User = require("./models/user");

/* Error Handlling */
const ExpressError = require("./utils/ExpressError");
const catchAsync = require("./utils/catchAsync");

/* Cookies, Session, and Flash */
const session = require("express-session");

/* Connect Mongo */
const MongoStore = require("connect-mongo");

/* Passport */
const passport = require("passport");
const LocalStrategy = require("passport-local");

const dbUrl = process.env.DB_URL;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(dbUrl);
  console.log("Database Connected");
}

/* Middleware etc */
const { isLoggedIn } = require("./middleware");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const secret = "foo";
const store = MongoStore.create({
  mongoUrl: dbUrl,
  touchAfter: 24 * 60 * 60,
  crypto: {
    secret,
  },
});
store.on("error", function (e) {
  console.log(e);
});

app.use(
  session({
    store,
    name: "session",
    secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post(
  "/login",
  passport.authenticate("local", {
    failureFlash: true,
    failureRedirect: "/login",
  }),
  (req, res) => {
    res.send("successfully logged in!");
  }
);

app.post("/logout", isLoggedIn, (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    } else {
      res.send("successfully logged out!");
    }
  });
});

app.post(
  "/register",
  catchAsync(async (req, res) => {
    try {
      console.log(req.body);
      const { username, email, password } = req.body;
      const user = new User({ username, email });
      const registeredUser = await User.register(user, password);
      req.login(registeredUser, (err) => {
        if (err) res.send(err);
        else {
          res.send("account registered successfully");
        }
      });
    } catch (e) {
      res.send(e.message);
    }
  })
);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
