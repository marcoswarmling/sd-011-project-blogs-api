const ServiceUser = require('../service/serviceUser');

async function create(req, res) {
  try {
    const { displayName, email, password, image } = req.body;
    const newUser = await ServiceUser.create(displayName, email, password, image);

    if (newUser.message) {
      return res.status(409).json(newUser);
    }
    return res.status(201).json(newUser);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
}

module.exports = { create };
