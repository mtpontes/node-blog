const { validationResult } = require("express-validator");

function runValidations(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
}

module.exports = runValidations;