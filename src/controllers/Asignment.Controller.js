const { Assignment, Referee, Match } = require("../models");
class AssignmentController {
  getAll = async (req, res, next) => {
    try {
      const assignments = await Assignment.findAll({
        include: [
          {
            model: Referee,
            attributes: ["firstName", "lastName"],
          },
          {
            model: Match,
            attributes: ["homeTeam", "awayTeam", "matchDate"],
          },
        ],
      });

      if (assignments.length === 0) {
        return res.status(404).json({
          message: "No Assignments found !!",
        });
      }
      res.status(200).json(assignments);
    } catch (err) {
      next(err);
    }
  };
  create = async (req, res, next) => {
    try {
      const { refereeId, matchId, role } = req.body;
      const referee = await Referee.findByPk(refereeId);
      if (!referee) {
        return res.status(404).json({
          message: "Referee not found.",
        });
      }
      const match = await Match.findByPk(matchId);
      if (!match) {
        return res.status(404).json({
          message: "Match not found.",
        });
      }
      if (referee.status !== "Active") {
        return res.status(409).json({
          message: "Only active referees can be assigned to a match.",
        });
      }
      const existingAssignment = await Assignment.findOne({
        where: {
          refereeId,
          matchId,
          role,
        },
      });
      if (existingAssignment) {
        return res.status(409).json({
          message:
            "This referee is already assigned to this match with this role.",
        });
      }
      const roleExists = await Assignment.findOne({
        where: {
          matchId,
          role,
        },
      });
      if (roleExists) {
        return res.status(409).json({
          message: `The role '${role}' is already assigned for this match.`,
        });
      }
      const assignment = await Assignment.create(req.body);
      res.status(201).json(assignment);
    } catch (err) {
      next(err);
    }
  };
  getById = async (req, res, next) => {
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
      next(err);
    }
  };
  update = async (req, res, next) => {
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
      next(err);
    }
  };
  remove = async (req, res, next) => {
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
      next(err);
    }
  };
}

module.exports = new AssignmentController();
