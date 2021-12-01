const express = require('express');
const { Users } = require('../models');
const { validateEntries, entriesExists } = require('../middlewares/validateEntries');

const router = express.Router();

// Este endpoint usa o método findAll do Sequelize para retorno todos os users.
router.get('/', async (_req, res) => {
  try {
    const allUsers = await Users.findAll();

    return res.status(200).json(allUsers);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.post('/', 
validateEntries,
entriesExists,
  async (req, res) => {
  try {
    const user = await Users.create(req.body);

    return res.status(201).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(409).json({ message: 'User already registered' }); 
}
});

// ...

module.exports = router;