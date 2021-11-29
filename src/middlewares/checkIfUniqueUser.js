const { User } = require('../models');

const checkUniqueUser = async (req, res, next) => {
  const { email } = req.body;
  const [userByEmail] = await User.findAll({ where: { email } });
  
  if (userByEmail) return res.status(409).json({ message: 'User already registered' });
  next();
};

module.exports = { checkUniqueUser };