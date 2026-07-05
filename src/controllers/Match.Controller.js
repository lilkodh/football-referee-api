const { Match, Assignment, Referee } = require("../models");
class MatchController {
  getAll = async (req, res, next) => {
    try {
      const matches = await Match.findAll();
      if (matches.length === 0) {
        return res.status(404).json({
          message: "No Matches detected",
        });
      }
      res.status(200).json(matches);
    } catch (error) {
      next(error);
    }
  };
  getRefereesByMatch = async (req, res, next) => {
    try {
      const { id } = req.params;

      const match = await Match.findByPk(id, {
        include: [
          {
            model: Assignment,
            attributes: ["role"],
            include: [
              {
                model: Referee,
                attributes: [
                  "id",
                  "firstName",
                  "lastName",
                  "category",
                  "nationality",
                ],
              },
            ],
          },
        ],
      });

      if (!match) {
        return res.status(404).json({
          message: `Match with id ${id} not found.`,
        });
      }

      res.status(200).json(match);
    } catch (error) {
      next(error);
    }
  };

  create = async (req, res, next) => {
    try {
      const match = await Match.create(req.body);
      res.status(201).json(match);
    } catch (error) {
      next(error);
    }
  };

  getById = async (req, res, next) => {
    try {
      const id = req.params.id;
      const match = await Match.findByPk(id);
      if (!match) {
        return res
          .status(404)
          .json({ message: `the match with id ${id} is not found ` });
      }
      res.status(200).json(match);
    } catch (error) {
      next(error);
    }
  };
  update = async (req, res, next) => {
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
      next(error);
    }
  };
  remove = async (req, res, next) => {
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
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new MatchController();