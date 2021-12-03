const validate = require('../validations/index');

const nameValidation = async (req, res, next) => {
  const { name } = req.body;

  const isNameValid = await validate.validateName(name);
  if (isNameValid) return res.status(isNameValid.code).json(isNameValid.message);

  next();
};

module.exports = {
  nameValidation,
};