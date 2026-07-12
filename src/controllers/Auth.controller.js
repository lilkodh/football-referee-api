const bcrypt = require("bcrypt");
const { User } = require("../models");
const jwt = require("jsonwebtoken");
const { USE } = require("sequelize/lib/index-hints");
const { json } = require("sequelize");
class AuthController {
  register = async (req, res, next) => {
    try {
      const { name, email, password, role } = req.body;
      const account = await User.findOne({
        where: { email },
      });
      if (account) {
        return res.status(409).json({
          message: "Email already exists.",
        });
      }
      const secretPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        name,
        email,
        password: secretPassword,
        role,
      });
      const userData = user.toJSON();
      delete userData.password;
      return res.status(201).json(userData);
    } catch (error) {
      next(error);
    }
  };
  login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const account = await User.findOne({
        where: {
          email,
        },
      });
      if (!account) {
        return res.status(401).json({
          message: "Invalid email or password.",
        });
      }
      const isPasswordValid = await bcrypt.compare(password, account.password);
      if (!isPasswordValid) {
        return res.status(401).json({
          message: "Invalid email or password.",
        });
      }
      const token = jwt.sign(
        {
          id: account.id,
          role: account.role,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        },
      );
      return res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  };
  me = async (req, res, next) => {
    try {
      const user = await User.findByPk(req.user.id);
      if (!user) {
        return res.status(404).json({
          message: "User not found .",
        });
      }
      const userData = user.toJSON();
      delete userData.password;
      return res.status(201).json(userData);
    } catch (error) {
      next(error);
    }
  }
  changePassword = async (req,res) =>{
    const {currentPassword, newPassword} = req.body;
    const id = req.user.id;
    const user = await User.findByPk(id)
    if(!user){
      return res.status(404).json({message : " User not Found ."})
    }
    const isMatch = await bcrypt.compare(
      currentPassword,
      user.password
    );
    if (!isMatch) {
      return res.status(400).json({message: "Current password is incorrect."})
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);
     user.password = hashedPassword ;
     await user.save();
     return res.status(200).json({
      message: "Password changed successfully."
     })
  }
}
module.exports = new AuthController();