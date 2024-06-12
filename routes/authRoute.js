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

// User exploration
router.get("/explore/:type", catchAsync(authController.get_explore));

// Mood Prediction
router.get("/journals", isAuthenticated, authController.get_user_journal);
router.get("/journals/:id", isAuthenticated, authController.get_single_journal);
router.post(
  "/predict/mood",
  isAuthenticated,
  catchAsync(authController.post_predict_mood)
);
router.put("/journals/:id", isAuthenticated, authController.put_user_journal);
router.delete(
  "/journals/:id",
  isAuthenticated,
  authController.delete_user_journal
);

// Chat Bot
router.get(
  "/chatbot/:id",
  isAuthenticated,
  catchAsync(authController.get_user_chat)
);

router.post(
  "/chatbot/:id/prompt",
  isAuthenticated,
  catchAsync(authController.post_user_prompt)
);

module.exports = router;
