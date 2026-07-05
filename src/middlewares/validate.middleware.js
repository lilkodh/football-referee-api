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
const validateReferee = (req, res, next) => {
  const requiredFields = [
    "firstName",
    "lastName",
    "nationality",
    "category",
    "confederation",
    "status",
    "experience",
  ];
  for (const field of requiredFields) {
    if (!req.body[field]) {
      return res.status(400).json({ message: `${field} is required ` });
    }
  }
  next();
};

const validateMatch = (req, res, next) => {
  const requiredFields = [
    "homeTeam",
    "awayTeam",
    "stadium",
    "hostCity",
    "matchDate",
    "phase",
  ];
  for (const field of requiredFields) {
    if (!req.body[field]) {
      return res.status(400).json({
        message: `${field} is required.`,
      });
    }
  }
  next();
};

module.exports = {
  validateAssignment,
  validateReferee,
  validateMatch,
};
