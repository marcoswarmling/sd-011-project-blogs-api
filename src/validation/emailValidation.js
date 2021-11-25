const { User } = require('../../models');

const validEmail = async (req, res, next) => {
  try {
    const { email } = req.body;
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return res.status(409).json({ message: 'User already registered' });
    }
    next();
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = validEmail;