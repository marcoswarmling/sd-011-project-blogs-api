const { User } = require('../models');
const err = require('../helpers/errors');

const { createToken } = require('../helpers/generateJWT');

const login = async (email, password) => {
  const search = await User.findOne({
    where: { email, password },
  });

  if (!search) return { err: err.invalidFields };

  const token = createToken(email, password);

  return { token };
};

module.exports = { login };