const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");
const Match = sequelize.define(
  "Match",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    homeTeam: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    awayTeam: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stadium: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hostCity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    matchDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    phase: {
      type: DataTypes.ENUM(
        "Group Stage",
        "Round Of 16",
        "Quarter-final",
        "Semi-final",
        "Final",
      ),
      allowNull: false,
    },
  },
  {
    tableName: "Matches",
    timestamps: false,
  },
);
module.exports = Match;
