const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/Auth.controller");
router.post("/register" , AuthController.register)





module.exports = router ;