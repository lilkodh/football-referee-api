const bcrypt = require("bcrypt");
const { User } = require("../models");
class AuthController {
    register = async (req , res , next )=>{
try{
    const { name , email , password , role} = req.body;
    const account = await User.findOne({
        where:{email},
    })
    if(account){
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
    const userData =user.toJSON();
    delete userData.password;
    return res.status(201).json(userData);
}catch(error){
next(error);
}
    }

}

module.exports = new AuthController();