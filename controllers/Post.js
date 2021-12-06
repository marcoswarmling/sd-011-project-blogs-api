const { Op } = require('sequelize');

const { BlogPost, Categorie } = require('../models');
const { validatePost } = require('../middlewares/Validations');

const create = async (req, res) => {
  const error = validatePost(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const { title, categoryIds, content } = req.body;

  const categories = await Categorie.findAll({ where: { id: { [Op.in]: categoryIds } },
    attributes: ['id'] });
  
  const categoriesList = categories.map((cat) => cat.dataValues.id);
  const includeAll = categoryIds.every((ele) => categoriesList.includes(ele));
  
  if (!includeAll) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }

  const userId = req.user.id;

  const { id } = await BlogPost.create({ title, userId, content });

  res.status(201).json({ id, userId, title, content });
};

module.exports = {
  create,
};