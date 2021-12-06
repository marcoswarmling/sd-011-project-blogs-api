const { Op } = require('sequelize');
const { User } = require('../models');

const validateDisplayName = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) { 
    return res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  
  next();
};

const validateEmail = async (req, res, next) => {
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const { email } = req.body;
  const emailDuplicated = await User.findOne({ where: { email: { [Op.eq]: email } } }); /* Como buscar um valor específico no bd com sequelize:
  https://sequelize.org/master/manual/model-querying-basics.html#simple-select-queries */

  if (!email || email === '') { 
    return res.status(400).json({ message: '"email" is required' });
  }
  
  if (!validEmail.test(email)) { 
    return res.status(400)
    .json({ message: '"email" must be a valid email' });
  }

  if (emailDuplicated !== null) {
    return res.status(409).json({ message: 'User already registered' });
  }

  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  if (!password || password === '') { 
    return res.status(400).json({ message: '"password" is required' });
  }

  if (password.length !== 6) { 
    return res.status(400)
      .json({ message: '"password" length must be 6 characters long' });
  }

  next();
};

module.exports = {
  validateDisplayName,
  validateEmail,
  validatePassword,
};
