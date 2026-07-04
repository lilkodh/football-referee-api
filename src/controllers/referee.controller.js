const { Referee } = require("../models");
const { Op, or } = require("sequelize");
class RefereeController {
  getAll = async (req, res) => {
    try {
      const {
        status,
        confederation,
        nationality,
        category,
        experience,
        search,
        sort,
        order
      } = req.query;
      const filters = {};
      const sortOptions={};
      if (status) filters.status = status;
      if (confederation) filters.confederation = confederation;
      if (nationality) filters.confederation = confederation;
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
      };
      if(sort) sortOptions.sort = sort ;
      if(sort){
        sortOptions.order = [
          [sort,order|| "ASC"]
        ]
      }

      const referees = await Referee.findAll({
        where: filters,
        order: sortOptions.order
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