const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/Auth.controller");
const authenticate = require("../middlewares/authenticate.middleware");
const authorize = require("../middlewares/authorize.middleware");
const zodValidate = require("../middlewares/zodValidate.middleware");
const {
  userRegistrationSchema,
  userLoginSchema,changePasswordSchema
} = require("../schemas/auth.schema");

router.post(
  "/register", zodValidate(userRegistrationSchema),
  authenticate,
  authorize("admin"),
  AuthController.register,
);

router.post("/login", zodValidate(userLoginSchema),AuthController.login);

router.get("/me", authenticate, AuthController.me);
router.put(
  "/change-password",
  zodValidate(changePasswordSchema),
  authenticate,
  AuthController.changePassword
);

module.exports = router;