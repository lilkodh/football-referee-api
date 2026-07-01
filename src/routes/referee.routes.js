const express = require("express");
const router = express.Router();
const RefereeController = require("../controllers/referee.controller");
const refereeController = require("../controllers/referee.controller");


router.get("/", refereeController.getAll);


module.exports = router;