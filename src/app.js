const express = require("express");
const app = express();
const refereeRoutes = require("./routes/Referee.Routes");
const MatchesRoutes = require("./routes/Match.Routes");
app.use(express.json());
app.use("/referees", refereeRoutes);
app.use("/matches", MatchesRoutes);



module.exports = app ;