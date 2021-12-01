const { createUser } = require('../schema');
const { User } = require('../models');

const valUser = async (req, res, next) => {
  const { displayName, email, password } = req.body;
  
  const { error } = createUser.validate({
    displayName,
    email,
    password,
  });
  
  /* console.log('ESSE É O MEU ERROR', error); */

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  
  const userExists = await User.findOne({ where: { email } });

  if (userExists) {
    return res.status(409).json({ message: 'User already registered' });
  }

  next();
};

module.exports = { valUser };