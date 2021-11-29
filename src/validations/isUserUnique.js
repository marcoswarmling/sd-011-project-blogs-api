const DefaultError = require('../errors/DefaultError');

module.exports = async (model, email = '') => {
  const foundUser = await model.findOne({ where: { email } });
  if (!foundUser) return true;

  throw new DefaultError('User already registered', 409);
};
