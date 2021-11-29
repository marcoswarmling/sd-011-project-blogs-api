const userServices = require('../services/userServices');

const getAllUsers = async (req, res) => {
  const { authorization } = req.headers;

  const responseValidation = await userServices.getAllUsers(authorization);

  if (responseValidation.error) {
    const { message, code } = responseValidation.error;
    return res.status(code).json({ message });
  }

  return res.status(401).json(responseValidation);
};

module.exports = getAllUsers;