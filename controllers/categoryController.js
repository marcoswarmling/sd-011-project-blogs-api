const categoryServices = require('../services');
const { status } = require('../schemas');
// const { validateToken } = require('../helpers/JWTfunctions');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const { authorization } = req.headers;

  const responseFromValidation = await categoryServices.createCategory(name, authorization);

  if (responseFromValidation.error) {
    const { message, code } = responseFromValidation.error;
    return res.status(code).json({ message });
  }

  return res.status(status.CREATED).json(responseFromValidation);
};

module.exports = {
  createCategory,
};
