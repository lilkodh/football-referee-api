const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Assignment = sequelize.define(
  "Assignment",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    refereeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    matchId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM(
        "Central Referee",
        "Assistant Referee",
        "Fourth Official",
        "VAR",
        "AVAR",
      ),
      allowNull: false,
    },
  },
  {
    tableName: "assignments",
    timestamps: false,
    indexes: [
      {
        fields : ["refereeId"], 
      },
      {
        fields: ["matchId"],
      },
      {
        unique: true,
        fields: ["refereeId", "matchId", "role"],
      }
    ]
  },
);
module.exports = Assignment;




