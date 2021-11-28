const { User } = require('../models');

const validateUser = async (req, res, next) => {
  const { email: userEmail } = req.body;
  const user = await User.findOne({
    where: { email: userEmail },
  });
  if (user) {
    return res.status(409).json({ message: 'User already registered' });
  }
  return next();
};

module.exports = validateUser;
