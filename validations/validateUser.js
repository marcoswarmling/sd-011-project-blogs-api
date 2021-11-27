const connection = require('../models');

const validateDisplayName = async (req, res, next) => {
  const { displayName } = req.body;

  if (displayName.length < 8) {
    await res.status(400).json({ message: 'Invalid entries. Try again.' });
  }
  next();
};

const validateParams = async (req, res, next) => {
  const { displayName, email, password } = req.body;

  if (!displayName || !email || !password) {
    await res.status(400).json({ message: 'Invalid entries. Try again.' });
  }
  next();
};

const verifyEmail = async (req, res, next) => {
  const { email } = req.body;
  if (!email.includes('@') || !email.includes('.com')) {
    await res.status(400).json({ message: 'Invalid entries. Try again.' });
  }
  next();
};

const emailExists = async (req, res, next) => {
  const { email } = req.body;
  const db = await connection();
  if (await db.collection('users').findOne({ email })) {
    return res.status(409).json({ message: 'Email already registered' });
  }
  
  next();
};

module.exports = {
  validateDisplayName,
  validateParams,
  verifyEmail,
  emailExists,
};
