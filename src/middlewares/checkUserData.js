const Joi = require('joi');

const checkBodyUserData = async (displayName, email, password, image) => {
  const userData = { displayName, email, password, image };
  const schema = Joi.object().keys({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().length(6).required(),
    image: Joi.string(),
  });
  const { error } = schema.validate(userData);
  if (!error) return false;
  return error;
};

const validateUserBodyData = async (req, res, next) => {
  const { displayName, email, password, image } = req.body;
  const error = await checkBodyUserData(displayName, email, password, image);
  if (error.message) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

module.exports = { validateUserBodyData };