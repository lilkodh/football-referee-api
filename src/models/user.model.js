const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");
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
      roel:{
        type: DataTypes.ENUM(
            "admin",
            "commissioner",
            "referee",
            "viewer"
        ),
        allowNull:false
      },
},
{
tableName:"users",
timestamps:false,
}
)

module.exports = User ;