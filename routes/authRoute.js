const { Router } = require("express");
const authController = require("../controllers/authController");

// Middleware
const { isAuthenticated } = require("../middleware");

/* Error Handlling */
const catchAsync = require("../utils/catchAsync");

const router = Router();

router.get("/", authController.home_get);

// User authentication
router.post("/register", catchAsync(authController.register_post));
router.post("/login", catchAsync(authController.login_post));
router.post("/logout", (req, res) => {});

// User recommendation
router.get(
  "/recommendation/:type/:category",
  catchAsync(authController.get_recommendation)
);

// Mood Prediction & ChatBot
router.get("/journals", isAuthenticated, authController.get_user_journal);

router.post(
  "/predict/mood",
  isAuthenticated,
  catchAsync(authController.post_predict_mood)
);

module.exports = router;
