const serviceUser = require('../services/userServices');

const userCreate = async (req, res) => {
  const { Users } = req.body;
  const token = await serviceUser.userCreate(Users);

  return res.status(201).json({ token });
};

module.exports = { userCreate };