const { Referee } = require("../models");

class RefereeController {
  getAll = async (req, res) => {
    try {
      const status = req.query;
      const referees = await Referee.findAll({
    
        where:{
           status:"Active"
        }
      });

      if (referees.length === 0) {
        return res.status(404).json({
          message: "No referees found.",
        });
      }
      res.json(referees);
    } catch (error) {
      res.status(500).json({
        message: "Internal Srver Error",
      });
    }
  };
  create = async (req, res) => {
    try {
      const referee = await Referee.create(req.body);
      res.status(201).json(referee);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  };
  getById = async (req, res) => {
    try {
      const id = req.params.id;
      const referee = await Referee.findByPk(id);
      if (!referee) {
        return res.status(404).json({
          message: `Referee with id ${id} not  found.`,
        });
      }
       res.status(200).json(referee);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  };
  update = async (req, res) => {
    try {
      const id = req.params.id;
      const referee = await Referee.findByPk(id);

      if (!referee) {
        return res.status(404).json({
          message: `Referee with id ${id} not  found.`,
        });
      }
      await referee.update(req.body);
      res.status(200).json(referee);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  };
  remove = async (req, res) => {
    try {
      const id = req.params.id;
      const referee = await Referee.findByPk(id);
      if (!referee) {
        return res.status(204).send({
          message: `Referee with id ${id} not  found.`,
        });
      }
      await referee.destroy();
      res.status(200).json({
        message: "The Referee Deleted Sucessfully",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
}
module.exports = new RefereeController();
