const express = require("express");
const app = express();
const refereesRoute = require("./routes/Referees.Route");
const MatchesRoute = require("./routes/Match.Route");
connst = AssignmentsRoute = require("./routes/Assignment.Route")
app.use(express.json());
app.use("/referees", refereesRoute);
app.use("/matches", MatchesRoute);
app.use("/assignmentes", AssignmentsRoute);


module.exports = app ;