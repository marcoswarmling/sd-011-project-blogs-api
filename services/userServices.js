const { User } = require('../models');

const getAll = async () => {
  try {
    const allUsers = await User.findAll();
    return allUsers;
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = {
  getAll,
};
