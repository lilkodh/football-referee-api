const { Referee } = require("../models");


class RefereeController {
 getAll = async (req,res) =>{
try{
    
    const referees = await Referee.findAll();
    
    referees.length === 0 ? res.send('NOTHIN EXIST IN THE DATABASE YET !!') : res.json(referees);


}catch(error){
    res.sendStatus(500).json({
message: "Somthing Related to Server"
    });

}

 };
 create = async (req,res) =>{
    try{
        const referee = await Referee.create(req.body);
        res.status(201).json(referee);

    }catch(error) {


    }
 }
}
module.exports = new RefereeController();
