const serviceUser = require('../services/userServices');

const userCreate = async (req, res) => {
  const token = await serviceUser.userCreate(req.body);

  return res.status(201).json({ token });
};

module.exports = { userCreate };