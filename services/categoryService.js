const { Category } = require('../models');
const { isValidUser } = require('../utils/validations');

const categoryRegister = async (name, userEmail) => {
  const result = await isValidUser(userEmail);
  if (!result.error) return Category.create({ name });
  return result;
};

module.exports = {
  categoryRegister,
};
