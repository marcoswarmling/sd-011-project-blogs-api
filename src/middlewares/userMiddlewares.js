const { userSchema } = require('./userValidator');
const { User } = require('../models');
const { userRegistered } = require('../errorText');

const userValidation = async (req, res, next) => {
  try {
    const { displayName, email, password } = req.body;
    
    const { error } = userSchema.validate({ displayName, email, password });

    if (error) return res.status(400).json({ message: error.details[0].message });

    const userExists = await User.findOne({ where: { email } });

    if (userExists) return res.status(409).json(userRegistered);

    next();
  } catch (e) {
    return res.status(500).json(e.message);
  }
};

module.exports = { 
  userValidation,
};
