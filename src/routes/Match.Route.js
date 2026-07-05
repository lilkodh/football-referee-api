const express = require("express");
const router = express.Router();
const MatchController = require("../controllers/Match.Controller");
const {validateMatch} = require("../middlewares/validate.middleware")
router.get("/", MatchController.GetAll);
router.post("/", validateMatch,MatchController.create);
router.get("/:id", MatchController.getById);
router.put("/:id", MatchController.update)
router.delete("/:id", MatchController.remove)


module.exports = router;