const express = require("express");
const router = express.Router();
const RefereeController = require("../controllers/Referee.controller");
const { validateReferee } = require("../middlewares/validate.middleware");
const authenticate = require("../middlewares/authenticate.middleware");
const authorize = require("../middlewares/authorize.middleware");
router.get(
  "/",
  authenticate,
  authorize("admin", "commissioner", "referee", "consultation"),
  RefereeController.getAll,
);
router.post(
  "/",
  authenticate,
  authorize("admin", "commissioner"),
  validateReferee,
  RefereeController.create,
);
router.get(
  "/:id/matches",
  authenticate,
  authorize("admin", "commissioner", "referee", "consultation"),
  RefereeController.getMatchesByReferee,
);
router.put(
  "/:id",
  authenticate,
  authorize("admin", "commissioner"),
  validateReferee,
  RefereeController.update,
);
router.get(
  "/:id",
  authenticate,
  authorize("admin", "commissioner", "referee", "consultation"),
  RefereeController.getById,
);
router.delete(
  "/:id",
  authenticate,
  authorize("admin"),
  RefereeController.remove,
);

module.exports = router;