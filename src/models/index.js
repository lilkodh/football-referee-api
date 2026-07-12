const Referee = require("./referee.model");
const Match = require("./match.model");
const Assignment = require("./assignment.model");
const User = require("./user.model");

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
User.hasOne(Referee,{
  foreignKey:"userId"
});
Referee.belongsTo(User,{
  foreignKey:"userId",
});
User.belongsTo(Referee, {
  foreignKey:"refereeId",
});
Referee.hasOne(User,{
  foreignKey: "refereeId",
});
module.exports = {Referee,Match,Assignment , User };