module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    res.send("You need to log-in first");
  }
  next();
};
