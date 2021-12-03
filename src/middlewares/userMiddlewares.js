const { userSchema } = require('./userValidator');
const { User } = require('../models');
const { userRegistered } = require('../errorText');

const userValidation = async (req, res, next) => {
  try {
    const { displayName, email, password } = req.body;

    const userExists = await User.findOne({ where: { email } });

    if (userExists) return res.status(409).json(userRegistered);
    
    const { error } = userSchema.validate({ displayName, email, password });

    if (error) return res.status(400).json({ message: error.details[0].message });

    next();
  } catch (e) {
    return res.status().json(e);
  }
};

module.exports = { 
  userValidation,
};
