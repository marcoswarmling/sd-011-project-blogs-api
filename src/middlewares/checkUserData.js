const { checkBodyUserData } = require('../helpers/checkBodyUserData');

const validateUserBodyData = async (req, res, next) => {
  const { displayName, email, password, image } = req.body;
  const error = await checkBodyUserData(displayName, email, password, image);
  if (error.message) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

module.exports = { validateUserBodyData };