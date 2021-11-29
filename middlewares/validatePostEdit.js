const validate = require('../validations/postValidations');

module.exports = (req, _res, next) => {
  validate.editPost(req.body);

  next();
};