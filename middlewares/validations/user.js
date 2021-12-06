const { badRequest, conflict } = require('../../utils/codes');
const service = require('../../services/user');

const isRequired = (name) => ({ message: `"${name}" is required` });

const validateDisplayName = (req, res, next) => {
  const { displayName } = req.body;
  if (!displayName) return res.status(badRequest).json(isRequired('displayName'));
  const msg = { message: '"displayName" length must be at least 8 characters long' };
  if (displayName.length < 8) return res.status(badRequest).json(msg);
  return next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if (!password) return res.status(badRequest).json(isRequired('password'));
  const msg = { message: '"password" length must be 6 characters long' };
  if (password.length < 6) return res.status(badRequest).json(msg);
  return next();
};

const validateEmail = async (req, res, next) => {
  const { email } = req.body;
  if (!email) return res.status(badRequest).json(isRequired('email'));
  const validEmail = /\S+@\S+\.\S+/;
  const validMsg = { message: '"email" must be a valid email' };
  const verifiedMsg = { message: 'User already registered' };
  if (!validEmail.test(email)) return res.status(badRequest).json(validMsg);
  const verifiedEmail = await service.findEmail(email);
  if (verifiedEmail.length === 1) return res.status(conflict).json(verifiedMsg); 
  return next();
};

module.exports = {
  validateDisplayName,
  validatePassword,
  validateEmail,
};
