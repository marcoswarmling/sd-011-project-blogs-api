const { Users } = require('../models');
const { validAuth } = require('../auth');

function checkfildEmail(req, res, next) {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({
      message: '"email" is required',
    });
  }
  next();
}

function checkfildPassword(req, res, next) {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({
      message: '"password" is required',
    });
  }
  next();
}

async function checkUserExist(req, res, next) {
  const { email } = req.body;

  const check = await Users.findOne({
    where: { email },
  });

  if (check) {
    return res.status(409).json({
      message: 'User already registered',
    });
  }
  next();
}

function checkEmptyPassword(req, res, next) {
  const { password } = req.body;
  if (password === '') {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }
  next();
}

function checkEmptyEmail(req, res, next) {
  const { email } = req.body;
  if (email === '') {
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  }
  next();
}

async function checkUserCredencies(req, res, next) {
  const { authorization } = req.headers;

  try {
    const { email } = await validAuth(authorization);

    await Users.findOne({
      where: { email },
    });
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  next();
}

module.exports = {
  checkUserExist,
  checkfildEmail,
  checkfildPassword,
  checkEmptyPassword,
  checkEmptyEmail,
  checkUserCredencies,
};
