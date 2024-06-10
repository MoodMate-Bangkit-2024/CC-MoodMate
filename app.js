if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

/* Express */
const express = require("express");
const app = express();
const port = 3000;

const authRoutes = require("./routes/authRoute");

/* Cookies & Sessions */
const cookieParser = require("cookie-parser");

/* Mongoose */
const mongoose = require("mongoose");

const dbUrl = process.env.DB_URL;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(dbUrl);
  console.log("Database Connected");
}

/* Middleware */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
// To set cookie without cookie parser you need to use the setHeader('Set-Cookie, 'x=y') method, and in javascript you can access it with document.cookie
// If a cookie already exist in the browser, than it will just replace it with a new value
// The default value of Expires/MaxAge in the browser is Session, which means if you close the browser, than the cookies will also be deleted
// You can put optional object on to you cookie-parser to set the maxAge, secure, httpOnly etc.
// If you set the secure property to true, that means that the cookie will only be sent via secure connection e.g HTTPS.
// If you set the httpOnly property to true, that means that now the cookies can't be accessed via JavaScript, and it can only be transffered via HTTP
// When it comes to authentication, in production you should only use authentication cookie over and HTTPS connection, and you don't want them to be accessed or modified by the client side code.

// Routes
app.use(authRoutes);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
