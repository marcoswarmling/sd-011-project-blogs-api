const { createError } = require('../middlewares/errors');
const { checkToken } = require('../middlewares/token');

const login = async (data) => {
  return data;
};

module.exports = {
  login,
};
