const Referee = require("./referee.model");
const Match = require("./match.model");
const Assignment = require("./assignment.model");

Referee.hasMany(Assignment, {
  foreignKey: "refereeId",
});
Assignment.belongsTo(Referee, {
  foreignKey: "refereeId",
});
Match.hasMany(Assignment, {
  foreignKey: "matchId",
});
Assignment.belongsTo(Match, {
  foreignKey: "matchId",
});
module.exports = {Referee,Match,Assignment};