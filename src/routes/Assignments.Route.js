const express = require("express");
const router = express.Router();
const AssignmentController = require("../controllers/Assignment.Controller");
const { validateAssignment } = require("../middlewares/validate.middleware");
const authenticate = require("../middlewares/authenticate.middleware");
const authorize = require("../middlewares/authorize.middleware");
router.get(
  "/",
  authenticate,
  authorize("admin", "commissioner", "referee"),
  AssignmentController.getAll,
);
router.post(
  "/",
  authenticate,
  authorize("admin", "commissioner"),
  validateAssignment,
  AssignmentController.create,
);
router.get(
  "/:id",
  authenticate,
  authorize("admin", "commissioner", "referee"),
  AssignmentController.getById,
);
router.put(
  "/:id",
  authenticate,
  authorize("admin", "commissioner"),
  validateAssignment,
  AssignmentController.update,
);
router.delete(
  "/:id",
  authenticate,
  authorize("admin", "commissioner"),
  AssignmentController.remove,
);
module.exports = router;