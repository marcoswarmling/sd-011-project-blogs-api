const { loginSchema } = require('../Middlewares/loginJoi');

const loginValidate = (request, response, next) => {
  const { error } = loginSchema.validate(request.body);
  if (error) return response.status(400).json({ message: error.details[0].message });

  return next();
};
module.exports = loginValidate;