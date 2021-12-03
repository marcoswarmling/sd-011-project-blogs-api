const userServices = require('../services/userServices');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const token = await userServices.create(displayName, email, password, image);
  
  return res.status(201).json({ token });
};

module.exports = {
  create,
};
