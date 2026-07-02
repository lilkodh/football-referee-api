const { Assignment , Referee ,Match} = require("../models");
class AssignmentController {
  getAll = async (req, res) => {
    try {
      const assignments = await Assignment.findAll({  include:[Match,Referee]});
    
      if (assignments.length === 0) {
        return res.status(404).json({
          message: "No Assignments found !!",
        });
      }
      res.status(200).json(assignments);
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  };
  create = async (req, res) => {
    try {
      const assignment = await Assignment.create(req.body);
      res.status(201).json(assignment);
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  };
  getById = async (req, res) => {
    try {
      const id = req.params.id;
      const assignment = await Assignment.findByPk(id);
      if (!assignment) {
        return res.status(404).json({
          message: `No Assignment with id ${id} Found !! `,
        });
      }
        res.status(200).json(assignment);
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  };
  update = async (req, res) => {
    try {
      const id = req.params.id;
      const assignment = await Assignment.findByPk(id);
      if (!assignment) {
        return res.status(404).json({
          message: `The assignment with id ${id} Not Found !!`,
        });
      }
      await assignment.update(req.body);
      res.status(200).json(assignment);
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  };
  remove = async (req, res) => {
    try {
      const id = req.params.id;
      const assignment = await Assignment.findByPk(id);
      if (!assignment) {
        return res.status(404).json({
          message: `The assignment with id ${id} Not Found !!`,
        });
      }
      await assignment.destroy();
      res.status(200).json({
        message: `The assignment with id ${id} Deleted Successfully`,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  };
}

module.exports = new AssignmentController();