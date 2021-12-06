const userService = require('../services/userService');

const getUsers = async (ids) => {
  const users = await userService.getAll({ raw: true });

  return ids.map((id) => users.find((user) => user.id === id));
};

module.exports = { getUsers };