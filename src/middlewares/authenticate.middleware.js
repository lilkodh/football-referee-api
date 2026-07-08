const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const authorization = req.header("Authorization");
  if (!authorization) {
    return res.status(401).json({
      message: "Authentication required.",
    });
  }
  const token = authorization.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
   return  res.status(401).json({
      message: "Invalid or expired token.",
    });
  }
};
module.exports = authenticate;