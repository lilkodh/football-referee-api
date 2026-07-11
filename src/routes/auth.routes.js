const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/Auth.controller");
const authenticate = require("../middlewares/authenticate.middleware");
const authorize = require("../middlewares/authorize.middleware");
router.post(
  "/register",
  authenticate,
  authorize("admin"),
  AuthController.register,
);

router.post("/login", AuthController.login);

router.get("/me", authenticate, AuthController.me);




module.exports = router ;