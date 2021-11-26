const validate = require('../validations/userValidations');

module.exports = (req, _res, next) => {
  validate.newUserInformation(req.body);

  next();
};