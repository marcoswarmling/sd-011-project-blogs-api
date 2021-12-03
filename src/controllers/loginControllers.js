const loginServices = require('../services/loginServices');
const { createToken } = require('../auth/createJWT');
const { invalidFields } = require('../errorText');

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await loginServices.login(email, password);

  if (!user) return res.status(400).json(invalidFields);

  const { id, displayName } = user.dataValues;

  const token = createToken({ id, displayName, email });

  return res.status(200).json({ token });
};

module.exports = {
  login,
};
