const validate = require('../validations/postValidations');

module.exports = (req, _res, next) => {
  validate.newPost(req.body);

  next();
};