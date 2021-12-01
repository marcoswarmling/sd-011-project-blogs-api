const createUser = require('../schema');
const User = require('../models/User');

const valUser = async (req, res, next) => {
  const { displayName, email, password } = req.body;

  const userExists = await User.findOne({ where: { email } });
  const { error } = createUser.validate({
    displayName,
    email,
    password,
  });

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  console.log(error);

  if (userExists) {
    return res.status(409).json({ message: 'User already registered' });
  }
  next();
};

module.exports = { valUser };