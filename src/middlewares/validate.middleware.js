const validateAssignment = (req, res, next) => {
  const { refereeId, matchId, role } = req.body;

  if (!refereeId) {
    return res.status(400).json({
      message: "Referee ID is required.",
    });
  }

  if (!matchId) {
    return res.status(400).json({
      message: "Match ID is required.",
    });
  }

  if (!role) {
    return res.status(400).json({
      message: "Role is required.",
    });
  }

  next();
};

module.exports = {
    validateAssignment ,
}