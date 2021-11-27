const { Users } = require('../models');
const { generateToken } = require('../auth');

async function getUser(req, res) {
  const { email, password } = req.body;

  const result = await Users.findOne({ where: { email, password } })
    .catch(() =>
      res.status(500).json({ message: 'Erro Interno' }));

  if (result) {
    const token = generateToken({
      id: result.id,
      email: result.email,
      displayName: result.displayName,
    });
    return res.status(200).json({ token });
  }
  res.status(400).json({ message: 'Invalid fields' });
}

module.exports = {
  getUser,
};
