const { createUserValidations, loginUserValidations } = require('../validations/users');

const createUserFields = (req, res, next) => {
  const { displayName, email, password, image } = req.body;
  const isInvalidUser = createUserValidations({ displayName, email, password, image });
  
  if (isInvalidUser) {
    return res.status(isInvalidUser.err.code).json({ message: isInvalidUser.err.message });
  }

  next();
};

const loginUserFields = (req, res, next) => {
  const { email, password } = req.body;
  const isInvalidUser = loginUserValidations({ email, password });
  
  if (isInvalidUser) {
    return res.status(isInvalidUser.err.code).json({ message: isInvalidUser.err.message });
  }

  next();
};

module.exports = {
  createUserFields,
  loginUserFields,
};