const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");
const Referee = sequelize.define("Referee", {

}, {
  id: {
    type: DataTypes.INTEGER,
    primarykey: true,
    autiIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull:false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  nationality: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  confederation: {
    type: DataTypes.ENUM("UEFA", "CONMEBOL", "CAF", "AFC", "CONCACAF", "OFC"),
    allowNull: false,
    validate:{
        min:0,
    }
  },
  category: {
    tyoe: DataTypes.ENUM(
      "Referee",
      "Assistant Referee",
      "Fourth Official",
      "VAR",
      "AVAR"
    ),
    allowNull: false,
  },
   experince:{
    type: DataTypes.INTEGER,
    allowNull:false,

   },
  status: {
    type: DataTypes.ENUM("Active", "Suspended", "Injured", "Retired"),
    allowNull: false,
  },
},
 {
    tableName: "referees",
    timestamps: false,
  }
);
module.exports = referee ;
