const { BlogPosts, Users, Categories } = require('../models');

const create = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { userId } = req.userData;
    const response = await BlogPosts.create({ title, content, categoryIds, userId });
    return res.status(201).json(response);    
  } catch (error) {
    return res.status(500).json({ error: 'Something went wrong' });
  }
};

const getAllPost = async (req, res) => {
  try {
    const response = await BlogPosts.findAll({
      include: [
        { model: Users, as: 'user', attributes: { exclude: ['password'] } },
        { model: Categories, as: 'categories', through: { attributes: [] } },
      ],
    });
    console.log(response);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: 'Something went wrong' });
  }  
};

const findByIdPost = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await BlogPosts.findByPk(id, {
      include: [
        { model: Users, as: 'user', attributes: { exclude: ['password'] } },
        { model: Categories, as: 'categories', through: { attributes: [] } },
      ],
    });
    if (!response) {
      return res.status(404).json({ message: 'Post does not exist' });
    }
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports = {
  create,
  getAllPost,
  findByIdPost,
};