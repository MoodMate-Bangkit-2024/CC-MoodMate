const jwt = require("jsonwebtoken");

const isAuthenticated = (req, res, next) => {
  const token = req.header("Authorization");

  console.log(token);

  // Check if jwt exist & valid
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(400).json({
          error: true,
          message: "You don't have access to this resource!",
        });
      } else {
        req.user = decoded.id;
        next();
      }
    });
  } else {
    res.status(400).json({
      error: true,
      message: "You don't have access to this resource!",
    });
  }
};

module.exports = { isAuthenticated };
