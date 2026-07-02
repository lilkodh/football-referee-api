const { Match } = require("../models");
class MatchController {
  GetAll = async (req, res) => {
    try {
      const matches = await Match.findAll();
      if (matches.length === 0) {
        return res.status(404).json({
          message: "No Matches detected",
        });
      }
      res.status(200).json(matches);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
  create = async (req, res) => {
    try {
      const match = await Match.create(req.body);
      console.log(match);
      res.status(201).json(match);
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Internal Server Error ",
      });
    }
  };
  getById = async (req, res) => {
    try {
      const id = req.params.id;
      const match = await Match.findByPk(id);
      if (!match) {
        return res
          .status(404)
          .json({ message: `the match with id ${id} is not found ` });
      }
      res.status(200).json(match);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal Server Error " });
    }
  };
  update = async (req, res) => {
    try {
      const id = req.params.id;
      const match = await Match.findByPk(id);

      if (!match) {
        return res.status(404).json({
          message: `Match with id ${id} not  found.`,
        });
      }
      await match.update(req.body);
      res.status(200).json(match);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  };
  remove = async () => {
    try {
      const id = req.params.id;
      const match = await Match.findByPk(id);
      if (!match) {
        return res.status(404).json({
          message: `Match with id ${id} not  found.`,
        });
      }
      await match.destroy();
      res.status(200).json({
        message: "The Match Deleted Successfully",
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
}

module.exports = new MatchController();