const express = require('express');
const { BlogPosts, Users, Categories } = require('../models');
const { validationToken,
  postEntrysRequired,
  categoriesExists, 
} = require('../middlewares/validateEntries');

const router = express.Router();

router.post('/', validationToken, postEntrysRequired, categoriesExists,
async (req, res) => {
  try {
    const { title, content } = req.body;
    const userId = req.userId.id;
    const { dataValues } = await BlogPosts.create({ userId, title, content });
    return res.status(201).json(dataValues);
  } catch (e) {
    return res.status(400).send('deu ruim');
  }
});
router.get('/', validationToken, async (req, res) => {
  try {
    const data = await BlogPosts.findAll({
      include: [{ model: Users, as: 'user' }, { model: Categories, 
        as: 'categories',
      through: { attributes: [] } }],
    });
    console.log(data);
    res.status(200).json(data);
  } catch (e) {
    return res.status(500).json({ message: 'nada ok' });
  }
});
module.exports = router;