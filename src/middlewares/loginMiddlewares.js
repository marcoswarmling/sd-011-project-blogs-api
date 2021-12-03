const { loginSchema } = require('./loginValidator');

const loginValidation = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const { error } = loginSchema.validate({ email, password });

    if (error) return res.status(400).json({ message: error.details[0].message });

    next();
  } catch (error) {
    return res.status(500).json({ error });
  }
};

module.exports = {
  loginValidation,
};
