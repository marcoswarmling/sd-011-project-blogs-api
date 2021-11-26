const validate = require('../validations/userValidations');

module.exports = (req, _res, next) => {
  validate.login(req.body);

  next();
};