const express = require('express');
const { Users } = require('../models');
const { validateEntries,
  entriesExists,
  validationToken, 
} = require('../middlewares/validateEntries');
const { createToken } = require('../auth/authentication');

const router = express.Router();

// Este endpoint usa o método findAll do Sequelize para retorno todos os users.
router.get('/',
validationToken,
async (_req, res) => {
  try {
    const allUsers = await Users.findAll();

    return res.status(200).json(allUsers);
  } catch (e) {
    return res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.post('/', 
entriesExists,
validateEntries,
  async (req, res) => {
  try {
    await Users.create(req.body);
    const token = createToken(req.body);
    return res.status(201).json({ token });
  } catch (e) {
    console.log(e.message);
    return res.status(409).json({ message: 'User already registered' }); 
}
});

// ...

module.exports = router;