const express = require("express");
const app = express();
const refereesRoute = require("./routes/Referees.Route");
const MatchesRoute = require("./routes/Match.Route");
const  AssignmentsRoute = require("./routes/Assignments.Route")
app.use(express.json());
app.use("/referees", refereesRoute);
app.use("/matches", MatchesRoute);
app.use("/assignments", AssignmentsRoute);


module.exports = app ;