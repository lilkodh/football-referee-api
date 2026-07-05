const express = require("express");
const router = express.Router();
const RefereeController = require("../controllers/Referee.controller");
const {validateReferee} = require("../middlewares/validate.middleware")

router.get("/", RefereeController.getAll);
router.post("/", validateReferee,RefereeController.create);
router.get("/:id/matches", RefereeController.getMatchesByReferee);
router.put("/:id", RefereeController.update);
router.get("/:id", RefereeController.getById);
router.delete("/:id", RefereeController.remove);


module.exports = router;