const express = require("express");
const router = express.Router();
const MatchController = require("../controllers/Match.Controller");
const { validateMatch } = require("../middlewares/validate.middleware");
const authenticate = require("../middlewares/authenticate.middleware");
const authorize = require("../middlewares/authorize.middleware");
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
  validateMatch,
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
  validateMatch,
  MatchController.update,
);
router.delete("/:id", authenticate, authorize("admin"), MatchController.remove);

module.exports = router;