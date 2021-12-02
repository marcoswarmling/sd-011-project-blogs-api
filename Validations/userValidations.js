const { getUserEmailCtrl } = require('../Controllers/user');

async function validateDisplayName(req, res, next) {
  const { displayName } = req.body;
  const minCharactersNumber = 8; 
  if (displayName.length < minCharactersNumber) {
    res.status(400).json({ message: '"displayName" length must be at least 8 characters long' });
  }
  next();
}

async function validateEmail(req, res, next) {
  const { email } = req.body;
  const regexEmail = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[com]+/i;
  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }
  
  if (!regexEmail.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  const registeredEmail = await getUserEmailCtrl(email);
  if (registeredEmail) {
    res.status(409).json({ message: 'User already registered' });
  }
  next();
}

async function validatePassword(req, res, next) {
  const { password } = req.body;
  if (!password) {
    res.status(400).json({ message: '"password" is required' });
  }

  const minCharactersNumber = 6;
  if (password.length !== minCharactersNumber) {
    res.status(400).json({ message: '"password" length must be 6 characters long' });
  }

  next();
}

module.exports = {
  validateDisplayName,
  validateEmail,
  validatePassword,
};