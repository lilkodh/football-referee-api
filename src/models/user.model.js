const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");
const Referee = require("./referee.model");
const User =  sequelize.define("user", {
id : {
    type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
},
name :{
     type: DataTypes.STRING,
    allowNull:false,
},
email:{
      type: DataTypes.STRING,
      allowNull:false,
      unique:true,
      validate:{
        isEmail:true
      },
},
password:{
        type: DataTypes.STRING,
        allowNull:false,
      },
      role:{
        type: DataTypes.ENUM(
            "admin",
            "commissioner",
            "referee",
            "consultation",
        ),
        allowNull:false
      },
     
      refereeId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    unique: true,
    
},
},
{
tableName:"users",
timestamps:false,
}
)

module.exports = User ;