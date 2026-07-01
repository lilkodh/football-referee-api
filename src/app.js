const express = require("express");
const app = express();
const refereeRoutes = require("./routes/referee.routes");
app.use(express.json());
app.use("/referees", refereeRoutes);



module.exports = app ;