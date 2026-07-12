const { Referee, Assignment, Match } = require("../models");
const { Op, or } = require("sequelize");
class RefereeController {
  getAll = async (req, res, next) => {
    try {
      const {
        status,
        confederation,
        nationality,
        category,
        experience,
        search,
        sort,
        order,
        page,
        limit,
      } = req.query;
      const filters = {};
      const sortOptions = {};
      const pageNumber = Number(page) || 1;
      const limitNumber = Number(limit) || 10;
      const offset = (pageNumber - 1) * limitNumber;
      if (status) filters.status = status;
      if (confederation) filters.confederation = confederation;
      if (nationality) filters.nationality = nationality;
      if (category) filters.category = category;
      if (experience) filters.experience = experience;
      if (search) {
        filters[Op.or] = [
          {
            firstName: {
              [Op.iLike]: `%${search}%`,
            },
          },
          {
            lastName: {
              [Op.iLike]: `%${search}%`,
            },
          },
        ];
      }
      if (sort) {
        sortOptions.order = [[sort, order || "ASC"]];
      }
      console.log({ page, limit });
      const referees = await Referee.findAll({
        where: filters,
        order: sortOptions.order,
        limit: limitNumber,
        offset,
      });

      if (referees.length === 0) {
        return res.status(404).json({
          message: "No referees found.",
        });
      }
      res.json(referees);
    } catch (error) {
      next(error);
    }
  };

  create = async (req, res, next) => {
    try {
      const referee = await Referee.create(req.body);
      res.status(201).json(referee);
    } catch (error) {
      next(error);
    }
  };
  getMatchesByReferee = async (req, res, next) => {
    try {
      const { id } = req.params;

      const referee = await Referee.findByPk(id, {
        include: [
          {
            model: Assignment,
            attributes: ["role"],
            include: [
              {
                model: Match,
                attributes: [
                  "id",
                  "homeTeam",
                  "awayTeam",
                  "stadium",
                  "hostCity",
                  "matchDate",
                  "phase",
                ],
              },
            ],
          },
        ],
      });

      if (!referee) {
        return res.status(404).json({
          message: `Referee with id ${id} not found.`,
        });
      }

      res.status(200).json(referee);
    } catch (error) {
      next(error);
    }
  };
  getById = async (req, res, next) => {
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
      next(error);
    }
  };
  update = async (req, res, next) => {
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
      next(error);
    }
  };
  remove = async (req, res, next) => {
    try {
      const id = req.params.id;
      const referee = await Referee.findByPk(id);
      if (!referee) {
        return res.status(404).send({
          message: `Referee with id ${id} not  found.`,
        });
      }
      await referee.destroy();
      res.status(200).json({
        message: "The Referee Deleted Sucessfully",
      });
    } catch (error) {
      next(error);
    }
  };
  getMyMatch = async  (req,res,next) =>{
    try{
const user = await User.findByPk(req.user.id);
   if (!user) {
      return res.status(404).json({
        message: "User not found.",
      });
    }
    if (!user.refereeId) {
  return res.status(404).json({
    message: "No referee is linked to this account.",
  });
}
const referee = await Referee.findByPk(user.refereeId, {
  include: {
    model: Match,
    through: {
      attributes: ["role"],
    },
  },
});

if (!referee) {
  return res.status(404).json({
    message: "Referee not found.",
  });
}
return res.status(200).json(referee);
    } catch(error){
        next(error);
    }
  }
}
module.exports = new RefereeController();