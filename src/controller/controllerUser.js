const { Users } = require('../../models');

async function create(req, res) {
  try {
    const { displayName, email, password, image } = req.body;
    const newUser = await Users.create({ displayName, email, password, image });

    return res.status(201).json(newUser);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
}

module.exports = { create };
