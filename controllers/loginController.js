const jwt = require('jsonwebtoken');

const secret = 'secretLoginSecret';

const login = async (req, res) => {
  const { email, password } = req.body;

  const payload = { email, password };

  const token = jwt.sign(payload, secret);

  res.status(200).json({ token });
};

module.exports = { login };