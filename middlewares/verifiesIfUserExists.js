const { Users } = require('../models');

const verifiesIfUserExists = async (req, res, next) => {
  try {
    const { email } = req.body;    
    const user = await Users.findOne({ raw: true, where: { email } });
    console.log(user);

    if (user) {
      return res.status(409).json({ message: 'User already registered' });
    }
    
    next();
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = verifiesIfUserExists;