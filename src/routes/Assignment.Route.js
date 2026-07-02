const express = require("express");
const router = express.Router();
const AssignmentController = require("../controllers/Asignment.Controller");
  
router.get("/", AssignmentController.getAll);
router.post("/", AssignmentController.create);
router.get("/:id",AssignmentController.getById);
router.put("/:id", AssignmentController.update);
router.delete("/:id", AssignmentController.remove);
module.exports = router ;