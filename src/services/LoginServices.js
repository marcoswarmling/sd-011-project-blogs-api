const { User } = require('../models');

const { generateToken } = require('../helpers/token');
const { loginSchema } = require('../schemas/loginSchema');
const { loginInvalidFields } = require('../errors');

module.exports = {
  logIn: async ({ email, password }) => {
    const { error } = loginSchema.validate({ email, password });

    if (error) return { error };

    const user = await User.findOne({
      where: { email },
    });

    if (!user || user.password !== password) return { error: loginInvalidFields };

    const token = await generateToken(user.displayName, email);

    return { token };
  },
};
