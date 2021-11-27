const servicesUser = require('../services/user');

const createUser = async (req, res) => {
  try {
    const token = await servicesUser.createUser(req.body);
    return res.status(201).json(token);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Um problema inesperado ocorreu' });
  }
};

const loginUser = async (req, res) => {
  try {
  const { email, password } = req.body;
  const token = await servicesUser.loginUser(email, password);
    return res.status(200).json(token);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Um problema inesperado ocorreu' });
  }
};

module.exports = {
  createUser,
  loginUser,
};
