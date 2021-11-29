const UserServices = require('../services/userServices');
const { createToken } = require('../utils/token');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { dataValues } = await UserServices.create({ displayName, email, password, image });
  
  delete dataValues.password;
  const token = createToken({ payload: dataValues });

  res.status(201).json({ token });
};

module.exports = {
  create,
};
