const userServices = require('../services/index');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const responseFromValidation = await userServices.createUser({
    displayName, email, password, image });

  if (responseFromValidation.error) {
    const { message } = responseFromValidation.error;
    return res.status(responseFromValidation.error.code).json({ message });
  }

  return res.status(201).json({ token: responseFromValidation });
};

module.exports = {
  createUser,
};
