const UserController = require('../services/userServices');

const getAll = async (_req, res) => {
  const getAllResponse = await UserController.getAll();
  return res.status(200).json(getAllResponse);
};

module.exports = {
  getAll,
};
