const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");
const Referee = sequelize.define("Referee", 
 {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
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
   
  },
  category: {
    type: DataTypes.ENUM(
      "Referee",
      "Assistant Referee",
      "Fourth Official",
      "VAR",
      "AVAR"
    ),
    allowNull: false,
  },
   experience:{
    type: DataTypes.INTEGER,
    allowNull:false,
     validate:{
        min:0,
    }

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
module.exports = Referee ;
