const {
  entryExists,
  passwordLength,
  displayNameLength,
  isEmail,
  entryNotEmpty,
} = require('../services/verifyEntries');
const { verifyToken } = require('../auth/authentication');

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

function validationToken(req, res, next) {
  const { authorization } = req.headers;
  if (authorization === '') { 
    return res.status(401).json({ message: 'Token not found' }); 
}
  if (!verifyToken(authorization)) { 
    return res.status(401).json({ message: 'Expired or invalid token' }); 
}
req.userId = verifyToken(authorization);
next();
}

function postEntrysRequired(req, res, next) {
  const { title, content, categoryIds } = req.body;
  if (!title) return res.status(400).json({ message: '"title" is required' });
  if (!content) return res.status(400).json({ message: '"content" is required' });
  if (!categoryIds) return res.status(400).json({ message: '"categoryIds" is required' });

  next();
}
module.exports = {
  validateEntries,
  entriesExists,
  entriesNotEmpty,
  validationToken,
  postEntrysRequired,
};