const userServices = require('../services/userServices');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const response = await userServices.createUser(displayName, email, password, image);
  console.log(response);
  if (response.error) {
    return res.status(400).json(response.error);
  }
  return res.status(201).json(response);
};

module.exports = { createUser };