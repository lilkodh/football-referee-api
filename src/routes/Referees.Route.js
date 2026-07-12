const express = require("express");
const router = express.Router();
const RefereeController = require("../controllers/Referee.controller");
const zodValidate = require("../middlewares/zodValidate.middleware");
const { refereeSchema } = require("../schemas/referee.schema");
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
  zodValidate(refereeSchema),
  RefereeController.create,
);
router.get(
  "/me/matches",
  authenticate,
  authorize("referee"),
  RefereeController.getMyMatch,
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
  zodValidate(refereeSchema),
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
