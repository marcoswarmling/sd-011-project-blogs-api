const { Users } = require('../models');

const serviceFindById = async (id) => {
  const user = await Users.findByPk(id);
  if (user === null) {
    return false;
  }
  return user;
};

module.exports = serviceFindById;
