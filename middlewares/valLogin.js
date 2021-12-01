const { loginUser } = require('../schema');
const { User } = require('../models');

const valLogin = async (req, res, next) => {
  const { email, password } = req.body;
  
  const { error } = loginUser.validate({
    email,
    password,
  });

  /* console.log('ESSE É O MEU CONSOLE', error); */

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const userExists = await User.findOne({ where: { email, password } });

  if (!userExists) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  next();
};

module.exports = { valLogin };