const sequelize = require("./config/database");
require("./models");
const app = require("./app")
const PORT = process.env.PORT;
const starSserver = async () => {
    try{
        await sequelize.authenticate();
        console.log("DATABASE IS CONNECTED SUCCESSFULLY DONE ");
        await sequelize.sync();
        console.log("DATABASE SYNCHRONIZED")
      
        app.listen(PORT,()=>{
            console.log(`THE SEREVR IS RUNNING IN THE PORT ${PORT}`);
        });
    }catch(err){
        console.log(err,"THE DATABASE IS FAILED TO CONNECT ");
        console.error(err.message);
    }
  
};
 starSserver();

