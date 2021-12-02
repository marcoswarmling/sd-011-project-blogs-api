const userServices = require('../services/userServices');

const createUser = async (req, res) => {
  console.log(req.body);
  try {
    const { displayName, email, password, image } = req.body;
    const response = await userServices.registerUser(displayName, email, password, image);
    return res.status(response.status).json(response.message);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: `Erro de servidor ${e.message}` });
  }
};

module.exports = {
  createUser,
};
