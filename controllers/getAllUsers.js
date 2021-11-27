const { status } = require('../schemas');
const userServices = require('../services/index');

const getAllUsers = async (req, res) => {
  const { authorization } = req.headers;

  const responseFromValidation = await userServices.getAllUsers(authorization);

  if (responseFromValidation.error) {
    const { message, code } = responseFromValidation.error;
    return res.status(code).json({ message });
  }

  return res.status(status.OK).json(responseFromValidation);
};

module.exports = getAllUsers;