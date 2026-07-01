const { Referee } = require("../models");

class RefereeController {
 getAll = async (req,res) =>{
try{
    
    const referees = await Referee.findAll();
    res.json(referees);


}catch(error){

}

 }
}
