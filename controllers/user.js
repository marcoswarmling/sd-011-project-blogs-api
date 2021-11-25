const User = require('../services/user');
const ValidationJWT = require('../middlewares/ValidationJWT');

const createUser = async (req, res, next) => {
  const { displayName, email, password, image } = req.body;
  const user = await User.createUser(displayName, email, password, image);
  if (user.err) return next(user.err);
  const token = ValidationJWT.createToken(email);

  return res.status(201).json({ token });
};

module.exports = {
  createUser,
};