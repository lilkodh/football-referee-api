const express = require("express");
const router = express.Router();
const RefereeController = require("../controllers/Referee.controller");


router.get("/", RefereeController.getAll);
router.post("/", RefereeController.create);
router.put("/:id", RefereeController.update);
router.get("/:id", RefereeController.getById);
router.delete("/:id", RefereeController.remove);


module.exports = router;