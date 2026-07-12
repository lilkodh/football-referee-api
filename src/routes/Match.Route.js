const express = require("express");
const router = express.Router();
const MatchController = require("../controllers/Match.Controller");
const authenticate = require("../middlewares/authenticate.middleware");
const authorize = require("../middlewares/authorize.middleware");
const zodValidate = require("../middlewares/zodValidate.middleware");
const { matchSchema } = require("../schemas/match.schema");
router.get(
  "/",
  authenticate,
  authorize("admin", "commissioner", "referee", "consultation"),
  MatchController.getAll,
);
router.post(
  "/",
  authenticate,
  authorize("admin", "commissioner"),
  zodValidate(matchSchema),
  MatchController.create,
);
router.get(
  "/:id/referees",
  authenticate,
  authorize("admin", "commissioner", "referee", "consultation"),
  MatchController.getRefereesByMatch,
);
router.get(
  "/:id",
  authenticate,
  authorize("admin", "commissioner", "referee", "consultation"),
  MatchController.getById,
);
router.put(
  "/:id",
  authenticate,
  authorize("admin", "commissioner"),
  zodValidate(matchSchema),
  MatchController.update,
);
router.delete("/:id", authenticate, authorize("admin"), MatchController.remove);

module.exports = router;