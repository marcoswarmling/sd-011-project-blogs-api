const {
  entryExists,
  passwordLength,
  displayNameLength,
  isEmail,
  entryNotEmpty,
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

  if (!entryExists(password)) return res.status(400).json({ message: '"password" is required' });

  if (!entryExists(email)) return res.status(400).json({ message: '"email" is required' });

  next();
}

function entriesNotEmpty(req, res, next) {
  const { email, password } = req.body;
  if (!entryNotEmpty(email)) { 
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  }
  if (!entryNotEmpty(password)) { 
    return res.status(400).json({ message: '"password" is not allowed to be empty' }); 
  }

  next();
}
module.exports = {
  validateEntries,
  entriesExists,
  entriesNotEmpty,
};