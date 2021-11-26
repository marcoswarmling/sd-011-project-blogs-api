const validate = require('../validations/categoryValidations');

module.exports = (req, _res, next) => {
  validate.newCategory(req.body);

  next();
};