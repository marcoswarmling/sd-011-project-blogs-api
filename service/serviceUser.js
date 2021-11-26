const { Users } = require('../models');

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

module.exports = {
  checkUserExist,
  checkfildEmail,
  checkfildPassword,
};
