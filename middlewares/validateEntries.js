const {
  passwordExists,
  passwordLength,
  emailExists,
  displayNameLength,
  isEmail,
} = require('../services/verifyEntries');

function validateEntries(req, res, next) {
  const { displayName, email, password } = req.body;

  if (!displayNameLength(displayName)) {
    return res.status(400).json({ 
      message: '"displayName" length must be at least 8 characters long',
    });
  }

  if (!passwordLength(password)) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }
  if (!isEmail(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  next();
}

function entriesExists(req, res, next) {
  const { email, password } = req.body;

  if (!passwordExists(password)) return res.status(400).json({ message: '"password" is required' });

  if (!emailExists(email)) return res.status(400).json({ message: '"email" is required' });

  next();
}
module.exports = {
  validateEntries,
  entriesExists,
};